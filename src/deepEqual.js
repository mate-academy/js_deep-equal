'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===
 * Objects are equal if all the own enumerable properties are equal
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
 */function deepEqual(a, b) {
  let objectOneLength = Object.keys(a).length;
  let objectTwoLength = Object.keys(b).length;

  if ((typeof a !== 'object' || typeof b !== 'object' || a === null || b == null)) {
    return a === b;
  }
  for (let key in a) {
    if (!(key in b) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return objectOneLength === objectTwoLength;
}

module.exports = deepEqual;
