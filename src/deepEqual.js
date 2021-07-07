'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===. Objects are equal if all the own
 * enumerable properties are equal
 *
 * deepEqual(1, 2) === false
 * deepEqual(10, 10) === true
 * deepEqual('10', 10) === false
 * deepEqual(0, false) === false
 * deepEqual({test: 5}, {test: 5}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5}}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5, def: 4}}) === false
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 */
function deepEqual(a, b) {
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return a === b;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let key in a) {
    if (!(key in b)) {
      return false;
    }
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
module.exports = deepEqual;
