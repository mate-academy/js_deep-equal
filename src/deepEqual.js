'use strict';

/**
 * Implement deepEqual function:
 *
 * Function compares 2 values
 * for primitives it compares types and values of given params
 * for objects it checks all fields and compare primitive values
 * inside all fields. Nested objects are compared too.
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 *
 * deepEqual(1, 2) === false
 * deepEqual(10, 10) === true
 * deepEqual('10', 10) === false
 * deepEqual(0, false) === false
 * deepEqual({test: 5}, {test: 5}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5}}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5, def: 4}}) === false
 *
 */

function isEqual(value1, value2) {
  return typeof value1 === typeof value2 && value1 === value2;
}

const isObject = elem => elem !== null && typeof elem === 'object';

const isKeysLengthEqual = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length;

function deepEqual(a, b) {
  if (isObject(a) && isObject(b)) {
    if (isKeysLengthEqual(a, b)) {
      for (let key in a) {
        let valueOfA = a[key];
        let valueOfB = b[key];
        if (isObject(valueOfA) && isObject(valueOfB) && deepEqual(valueOfA, valueOfB)) {
          continue;
        }
        if (valueOfA !== valueOfB) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  return isEqual(a, b);
}

module.exports = deepEqual;
