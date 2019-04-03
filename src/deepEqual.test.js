'use strict';

const deepEqual = require('./deepEqual');

const a = { name: 'Misha', order: { price: 20 } };
const b = { order: { price: 20 }, name: 'Misha' };
const c = { name: 'Misha', order: { price: 20 }, extraField: null };
const d = { order: { price: 20 }, name: 'Petya' };
const e = { name: 'Misha', order: { price: 1000 } };
const f = { name: 'Misha', order: { price: 20, extraField: null } };

test('5 and 5 should be equal', () => {
  expect(deepEqual(5, 5)).toBe(true);
});

test('null and null should be equal', () => {
  expect(deepEqual(null, null)).toBe(true);
});

test(`${a} and ${b} should be equal`, () => {
  expect(deepEqual(a, b)).toBe(true);
});

test('A and B should be equal', () => {
  expect(deepEqual({ test: a }, { test: b })).toBe(true);
});

test('5 and 6 should NOT be equal', () => {
  expect(deepEqual(5, 6)).toBe(false);
});

test('0 and false should NOT be equal', () => {
  expect(deepEqual(0, false)).toBe(false);
});

test('null and 5 should NOT be equal', () => {
  expect(deepEqual(null, 5)).toBe(false);
});

test(`${a} and null should NOT be equal`, () => {
  expect(deepEqual(a, null)).toBe(false);
});

test(`${a} and ${c} should NOT be equal`, () => {
  expect(deepEqual(a, c)).toBe(false);
});

test(`${a} and ${d} should NOT be equal`, () => {
  expect(deepEqual(a, d)).toBe(false);
});

test(`${a} and ${e} should NOT be equal`, () => {
  expect(deepEqual(a, e)).toBe(false);
});

test(`${a} and ${f} should NOT be equal`, () => {
  expect(deepEqual(a, f)).toBe(false);
});
