'use strict';

const deepEqual = require('./deepEqual');

const testObj = { name: 'Misha', order: { price: 20 } };
const testObjPropertiesInDifferentOrder = { order: { price: 20 }, name: 'Misha' };
const testObjExtraNullProperty = { name: 'Misha', order: { price: 20 }, extraField: null };
const testObjChangedProperty = { order: { price: 20 }, name: 'Petya' };
const testObjChangedPropertyInNestedObj = { name: 'Misha', order: { price: 1000 } };
const testObjExtraNullPropertyInNestedObj = { name: 'Misha', order: { price: 20, extraField: null } };

test('5 and 5 should be equal', () => {
  expect(deepEqual(5, 5)).toBe(true);
});

test('null and null should be equal', () => {
  expect(deepEqual(null, null)).toBe(true);
});

test(`Objects with same properties but in different order should be equal`,
  () => {
    expect(deepEqual(testObj, testObjPropertiesInDifferentOrder))
      .toBe(true);
  });

test(
  'Nested Objects with same properties but in different order should be equal',
  () => {
    expect(deepEqual(
      { test: testObj },
      { test: testObjPropertiesInDifferentOrder }))
      .toBe(true);
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

test(`Object and null should NOT be equal`, () => {
  expect(deepEqual(testObj, null)).toBe(false);
});

test(
  `Object and its copy with extra null property should not be equal`,
  () => {
    expect(deepEqual(testObj, testObjExtraNullProperty)).toBe(false);
  });

test(
  `Object and its copy with changed property should not be equal`,
  () => {
    expect(deepEqual(testObj, testObjChangedProperty)).toBe(false);
  });

test(
  `Object and its copy with changed nested property should not be equal`,
  () => {
    expect(deepEqual(
      testObj,
      testObjChangedPropertyInNestedObj))
      .toBe(false);
  });

test(
  `Object and its copy with extra null property in nested object
   shouldn't be equal`,
  () => {
    expect(deepEqual(
      testObj,
      testObjExtraNullPropertyInNestedObj))
      .toBe(false);
  });
