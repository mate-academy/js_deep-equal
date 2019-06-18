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
  // write code here
  if (a === b) {
    return true;
  }
  if (a == null || typeof a !== 'object' ||
  b == null || typeof b !== 'object') {
    return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  let propsInA = 0;
  let propsInB = 0;

  for (let prop in a) {
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }
  return propsInA === propsInB;
}

module.exports = deepEqual;
