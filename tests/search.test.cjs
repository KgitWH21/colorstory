const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'colors.js'), 'utf8'), context);
// Use the app's actual color preprocessing, without loading its DOM interface.
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
vm.runInContext(app.slice(0, app.indexOf('const wheelColors')), context);
vm.runInContext(fs.readFileSync(path.join(root, 'moods.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(root, 'search.js'), 'utf8'), context);
const evaluate = code => vm.runInContext(code, context);

test('everyday names resolve to varied shades and a valid pairing base', () => {
  for (const query of ['green', 'red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'grey', 'black', 'white']) {
    const result = evaluate(`ColorSearch.resolve(${JSON.stringify(query)})`);
    assert.equal(result.kind, 'group', query);
    assert.ok(result.anchor && result.matches.length >= 6, query);
    assert.equal(new Set(result.matches).size, result.matches.length, query);
    assert.ok(result.matches.includes(result.anchor), query);
  }
  const green = evaluate('ColorSearch.resolve(" GREEN ")');
  assert.ok(green.matches.slice(0, 6).some(c => c.name === 'Sage'));
  assert.ok(green.matches.slice(0, 6).some(c => c.name === 'Dark olive'));
  assert.ok(green.matches.slice(0, 6).some(c => c.name === 'Mint mist'));
});

test('exact shade names and HEX values find the original shade first', () => {
  for (const query of ['sage', 'SAGE', '#8CAA92', '8caa92']) {
    assert.equal(evaluate(`ColorSearch.resolve(${JSON.stringify(query)}).matches[0].name`), 'Sage');
  }
  assert.equal(evaluate('ColorSearch.resolve("#abc").hex'), '#AABBCC');
  assert.equal(evaluate('ColorSearch.resolve("Red earth").anchor.name'), 'Red earth');
  assert.equal(evaluate('ColorSearch.resolve("#000000").matches[0].name'), 'Absolute black');
});

test('partial shade names and families remain searchable', () => {
  assert.ok(evaluate('ColorSearch.resolve("lavender").matches.some(c => c.name === "Lavender gray")'));
  assert.ok(evaluate('ColorSearch.resolve("teal").matches.every(c => c.family === "Teal" || c.name.toLowerCase().includes("teal"))'));
});

test('imagery uses actual associations and can cross color families', () => {
  const matches = evaluate('ColorSearch.imagery(ColorSearch.resolve("green"))');
  assert.ok(matches.length > 6);
  assert.ok(matches.some(({ color }) => color.family !== 'Green'));
  assert.ok(matches.every(({ color, phrase }) => color.associations.includes(phrase)));
  const red = evaluate('ColorSearch.imagery(ColorSearch.resolve("red"))');
  // "Weathered" contains the letters "red", but is not a direct red image.
  assert.ok(red.filter(({ phrase }) => /weathered/i.test(phrase) && !/\bred\b/i.test(phrase)).every(({ score }) => score < 10));
  for (const query of ['moss', 'sea glass', 'leather']) {
    const results = evaluate(`ColorSearch.imagery(ColorSearch.resolve(${JSON.stringify(query)}))`);
    assert.ok(results.length, query);
    assert.ok(results[0].phrase.toLowerCase().includes(query), query);
  }
});

test('empty, unknown, and invalid HEX queries do not produce invented matches', () => {
  assert.equal(evaluate('ColorSearch.resolve(" ")'), null);
  for (const query of ['no-such-color-xyz', '#12', '#GGGGGG', '<script>alert(1)</script>']) {
    assert.equal(evaluate(`ColorSearch.resolve(${JSON.stringify(query)}).matches.length`), 0, query);
    assert.equal(evaluate(`ColorSearch.imagery(ColorSearch.resolve(${JSON.stringify(query)})).length`), 0, query);
  }
});
