const WheelMath = {
  wrap: angle => ((angle % 360) + 360) % 360,
  delta: (from, to) => ((to - from + 540) % 360 + 360) % 360 - 180,
  index: (rotation, count) => Math.min(count - 1, Math.floor((((-rotation % 360) + 360) % 360) / (360 / count))),
  angle: (index, count) => -(index + .5) * (360 / count)
};

const WHEEL_MOTION = {
  spinTurns: 5,
  spinDuration: 4200,
  maxDragVelocity: 2.1,
  coastFriction: .0021,
  stopVelocity: .012,
  maxCoastDuration: 4200
};

// Pointer events share one interaction model for mouse, touch, and pen.
class SpinWheel {
  constructor(control, ring, shades, callbacks) {
    this.control = control;
    this.ring = ring;
    this.shades = shades;
    this.callbacks = callbacks;
    this.rotation = 0;
    this.frame = null;
    this.drag = null;
    this.busy = false;
    this.preview = null;
    control.setAttribute('aria-valuemax', shades.length - 1);
    control.addEventListener('pointerdown', event => this.startDrag(event));
    control.addEventListener('pointermove', event => this.moveDrag(event));
    control.addEventListener('pointerup', event => this.endDrag(event));
    control.addEventListener('pointercancel', event => this.endDrag(event, true));
    control.addEventListener('lostpointercapture', event => this.endDrag(event, true));
    control.addEventListener('keydown', event => this.keydown(event));
    window.addEventListener('blur', () => this.interrupt());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.interrupt(); });
  }
  colorAt() { return this.shades[WheelMath.index(this.rotation, this.shades.length)]; }
  setBusy(value) {
    if (this.busy === value) return;
    this.busy = value;
    this.control.setAttribute('aria-busy', String(value));
    this.callbacks.onBusy(value);
  }
  cancelFrame() {
    if (this.frame !== null) cancelAnimationFrame(this.frame);
    this.frame = null;
  }
  move(rotation) {
    this.rotation = rotation;
    this.ring.style.transform = `rotate(${rotation}deg)`;
    const color = this.colorAt();
    if (color === this.preview) return;
    this.preview = color;
    this.control.setAttribute('aria-valuenow', this.shades.indexOf(color));
    this.control.setAttribute('aria-valuetext', `${color.name}, ${color.hex}`);
    this.callbacks.onPreview(color);
  }
  setColor(color) {
    this.cancelFrame();
    const target = WheelMath.angle(this.shades.indexOf(color), this.shades.length);
    this.move(this.rotation + WheelMath.delta(WheelMath.wrap(this.rotation), WheelMath.wrap(target)));
  }
  animate(target, duration, done) {
    this.cancelFrame();
    const from = this.rotation, start = performance.now();
    const frame = now => {
      const progress = Math.min(1, (now - start) / duration);
      this.move(from + (target - from) * (1 - (1 - progress) ** 3));
      if (progress < 1) this.frame = requestAnimationFrame(frame);
      else { this.frame = null; done(); }
    };
    this.frame = requestAnimationFrame(frame);
  }
  finish(color) {
    this.cancelFrame();
    this.setColor(color);
    this.callbacks.onSelect(color);
    this.setBusy(false);
  }
  spinTo(color) {
    this.cancelFrame();
    this.setBusy(true);
    const goal = WheelMath.wrap(WheelMath.angle(this.shades.indexOf(color), this.shades.length));
    const target = this.rotation + WheelMath.wrap(goal - WheelMath.wrap(this.rotation)) + 360 * WHEEL_MOTION.spinTurns;
    if (this.callbacks.reduced()) { this.move(target); this.finish(color); }
    else this.animate(target, WHEEL_MOTION.spinDuration, () => this.finish(color));
  }
  pointerAngle(event, bounds) {
    return Math.atan2(event.clientY - bounds.cy, event.clientX - bounds.cx) * 180 / Math.PI;
  }
  startDrag(event) {
    if (!event.isPrimary || event.button !== 0 || this.drag) return;
    const rect = this.control.getBoundingClientRect();
    const bounds = { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
    const radius = Math.hypot(event.clientX - bounds.cx, event.clientY - bounds.cy);
    if (radius > rect.width / 2 || radius < 18) return;
    event.preventDefault();
    this.cancelFrame();
    this.control.focus({ preventScroll: true });
    this.drag = { id: event.pointerId, bounds, angle: this.pointerAngle(event, bounds), time: performance.now(), velocity: 0 };
    this.control.setPointerCapture(event.pointerId);
    this.control.classList.add('is-dragging');
    this.setBusy(true);
  }
  moveDrag(event) {
    const drag = this.drag;
    if (!drag || event.pointerId !== drag.id) return;
    event.preventDefault();
    const now = performance.now(), angle = this.pointerAngle(event, drag.bounds);
    // Ignore the unstable angle at the very center of the disc.
    if (Math.hypot(event.clientX - drag.bounds.cx, event.clientY - drag.bounds.cy) < 18) {
      drag.angle = null; drag.time = now; drag.velocity = 0; return;
    }
    if (drag.angle === null) { drag.angle = angle; drag.time = now; return; }
    const delta = WheelMath.delta(drag.angle, angle);
    const velocity = delta / Math.max(8, now - drag.time);
    drag.velocity = Math.max(-WHEEL_MOTION.maxDragVelocity, Math.min(WHEEL_MOTION.maxDragVelocity, drag.velocity * .35 + velocity * .65));
    drag.angle = angle; drag.time = now;
    this.move(this.rotation + delta);
  }
  releaseCapture(drag) {
    this.drag = null;
    this.control.classList.remove('is-dragging');
    if (this.control.hasPointerCapture(drag.id)) this.control.releasePointerCapture(drag.id);
  }
  endDrag(event, cancelled = false) {
    const drag = this.drag;
    if (!drag || event.pointerId !== drag.id) return;
    this.releaseCapture(drag);
    const velocity = performance.now() - drag.time > 100 ? 0 : drag.velocity;
    if (cancelled || this.callbacks.reduced() || Math.abs(velocity) < WHEEL_MOTION.stopVelocity) { this.snap(); return; }
    this.coast(velocity);
  }
  coast(velocity) {
    const start = performance.now();
    let last = start;
    const frame = now => {
      const elapsed = Math.min(40, now - last); last = now;
      const decay = Math.exp(-WHEEL_MOTION.coastFriction * elapsed);
      // Integrate the coast over the frame so momentum feels consistent at
      // different screen refresh rates, including the final slow rotations.
      this.move(this.rotation + velocity * (1 - decay) / WHEEL_MOTION.coastFriction);
      velocity *= decay;
      if (Math.abs(velocity) > WHEEL_MOTION.stopVelocity && now - start < WHEEL_MOTION.maxCoastDuration) this.frame = requestAnimationFrame(frame);
      else { this.frame = null; this.snap(); }
    };
    this.frame = requestAnimationFrame(frame);
  }
  snap() {
    const color = this.colorAt();
    const goal = WheelMath.wrap(WheelMath.angle(this.shades.indexOf(color), this.shades.length));
    const target = this.rotation + WheelMath.delta(WheelMath.wrap(this.rotation), goal);
    if (this.callbacks.reduced()) this.finish(color);
    else this.animate(target, 120, () => this.finish(color));
  }
  interrupt() {
    if (!this.busy) return;
    this.cancelFrame();
    if (this.drag) this.releaseCapture(this.drag);
    this.finish(this.colorAt());
  }
  keydown(event) {
    if (event.key === 'Escape') { event.preventDefault(); this.interrupt(); return; }
    if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); this.callbacks.onSpin(); return; }
    const offset = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 10, PageDown: -10 }[event.key];
    if (offset === undefined && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    this.interrupt();
    const index = this.shades.indexOf(this.colorAt());
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? this.shades.length - 1 : (index + offset + this.shades.length) % this.shades.length;
    this.finish(this.shades[next]);
  }
}
