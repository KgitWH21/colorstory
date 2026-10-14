const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const frames = new Map();
let clock = 0, frameId = 0;
const context = vm.createContext({
  window: { addEventListener() {} }, document: { addEventListener() {} },
  performance: { now: () => clock },
  requestAnimationFrame: callback => { frames.set(++frameId, callback); return frameId; },
  cancelAnimationFrame: id => frames.delete(id)
});
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'wheel.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'colors.js'), 'utf8'), context);
const count = vm.runInContext('colors.length', context);
const { WheelMath, SpinWheel } = vm.runInContext('({ WheelMath, SpinWheel })', context);

test('every shade lands under the pointer across multiple full turns', () => {
  for (let index = 0; index < count; index++) {
    for (const turns of [-5, 0, 7]) {
      assert.equal(WheelMath.index(WheelMath.angle(index, count) + turns * 360, count), index);
    }
  }
  assert.equal(WheelMath.index(WheelMath.angle(35, count) + 90, count), (35 + count * .75) % count);
  assert.equal(WheelMath.index(WheelMath.angle(35, count) - 90, count), (35 + count * .25) % count);
});

test('crossing the pointer-angle seam makes a small movement in either direction', () => {
  assert.equal(WheelMath.delta(179, -179), 2);
  assert.equal(WheelMath.delta(-179, 179), -2);
  assert.equal(WheelMath.delta(10, 730), 0);
});

function harness(reduced = true) {
  const attributes = new Map(), captured = new Set(), classes = new Set(), selections = [], previews = [], busy = [];
  const control = {
    setAttribute: (key, value) => attributes.set(key, String(value)), addEventListener() {}, focus() {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 560, height: 560 }),
    setPointerCapture: id => captured.add(id), hasPointerCapture: id => captured.has(id), releasePointerCapture: id => captured.delete(id),
    classList: { add: name => classes.add(name), remove: name => classes.delete(name) }
  };
  const shades = Array.from({ length: count }, (_, index) => ({ name: `Shade ${index}`, hex: '#000000' }));
  const wheel = new SpinWheel(control, { style: {} }, shades, { reduced: () => reduced, onPreview: c => previews.push(c), onSelect: c => selections.push(c), onBusy: value => busy.push(value), onSpin() {} });
  wheel.setColor(shades[35]);
  const event = (x, y, extra = {}) => ({ clientX: x, clientY: y, isPrimary: true, button: 0, pointerId: 1, preventDefault() {}, ...extra });
  return { wheel, shades, attributes, captured, classes, selections, previews, busy, event };
}

test('dragging rotates directly and cancellation releases capture and selects the visible shade', () => {
  const h = harness();
  h.wheel.startDrag(h.event(500, 280));
  clock += 20;
  h.wheel.moveDrag(h.event(280, 500));
  assert.equal(h.previews.at(-1), h.shades[(35 + count * .75) % count]);
  h.wheel.endDrag(h.event(280, 500), true);
  assert.equal(h.selections.at(-1), h.shades[(35 + count * .75) % count]);
  assert.equal(h.wheel.busy, false);
  assert.equal(h.captured.size, 0);
  assert.equal(h.classes.size, 0);
  assert.deepEqual(h.busy, [true, false]);
});

test('secondary pointers and right-click cannot start or alter the active drag', () => {
  const h = harness();
  h.wheel.startDrag(h.event(500, 280, { button: 2 }));
  assert.equal(h.wheel.drag, null);
  h.wheel.startDrag(h.event(500, 280));
  h.wheel.moveDrag(h.event(280, 500, { pointerId: 2, isPrimary: false }));
  assert.equal(h.wheel.colorAt(), h.shades[35]);
  h.wheel.interrupt();
  assert.equal(h.wheel.busy, false);
  assert.equal(h.captured.size, 0);
});

test('passing through the center does not cause a half-turn jump', () => {
  const h = harness();
  h.wheel.startDrag(h.event(500, 280));
  h.wheel.moveDrag(h.event(280, 280));
  h.wheel.moveDrag(h.event(80, 280));
  assert.equal(h.wheel.colorAt(), h.shades[35]);
  h.wheel.interrupt();
});

test('keyboard access reaches every endpoint and wraps through the collection', () => {
  const h = harness(), key = key => h.wheel.keydown({ key, preventDefault() {} });
  key('Home'); assert.equal(h.selections.at(-1), h.shades[0]);
  key('ArrowLeft'); assert.equal(h.selections.at(-1), h.shades[count - 1]);
  key('ArrowRight'); assert.equal(h.selections.at(-1), h.shades[0]);
  key('End'); assert.equal(h.selections.at(-1), h.shades[count - 1]);
});

function advance(milliseconds) {
  const end = clock + milliseconds;
  while (clock < end) {
    clock = Math.min(end, clock + 16);
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach(callback => callback(clock));
  }
}

test('a flick keeps meaningful momentum after a second and then lands cleanly', () => {
  const h = harness(false);
  h.wheel.startDrag(h.event(500, 280));
  clock += 60;
  h.wheel.moveDrag(h.event(280, 500));
  const releasedAt = h.wheel.rotation;
  h.wheel.endDrag(h.event(280, 500));
  advance(1000);
  assert.equal(h.wheel.busy, true);
  assert.ok(h.wheel.rotation - releasedAt > 300, 'a flick should travel almost another full turn in its first second');
  advance(4000);
  assert.equal(h.wheel.busy, false);
  assert.equal(h.wheel.frame, null);
  assert.equal(h.selections.at(-1), h.wheel.colorAt());
});

test('button spin has multiple visible rotations and a longer slowdown', () => {
  const h = harness(false), start = h.wheel.rotation;
  h.wheel.spinTo(h.shades[200]);
  advance(3000);
  assert.equal(h.wheel.busy, true);
  assert.ok(h.wheel.rotation - start > 4 * 360);
  advance(2000);
  assert.equal(h.wheel.busy, false);
  assert.equal(h.selections.at(-1), h.shades[200]);
  assert.equal(h.wheel.colorAt(), h.shades[200]);
});
