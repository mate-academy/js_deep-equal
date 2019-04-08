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
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if ((typeof a === typeof b && typeof a === 'object' && a !== null && b !== null)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (let property of Object.keys(a)) {
      if (b.hasOwnProperty(property)) {
        if (!deepEqual(a[property], b[property])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

module.exports = deepEqual;
