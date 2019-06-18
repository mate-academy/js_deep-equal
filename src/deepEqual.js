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
  if (a === b) {
    return true;
  }
  if (typeof (a) !== 'object' || typeof (b) !== 'object') {
    return false;
  }

  let keyInA = 0;
  let keyInB = 0;
  for (let keyA in a) {
    keyInA += 1;
  }
  for (let keyB in b) {
    keyInB += 1;
    if (!(keyB in a) || !deepEqual(a[keyB], b[keyB])) {
      return false;
    }
  }
  return keyInA === keyInB;
}

module.exports = deepEqual;
