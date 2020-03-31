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
  let countA = 0;
  let countB = 0;

  if (!(typeof a === 'object'
    && typeof b === 'object'
    && a !== null
    && b !== null)) {
    return a === b;
  }

  for (const key in a) {
    countA++;

    if (deepEqual(a[key], b[key])) {
      continue;
    } else {
      return false;
    }
  }

  for (const key in b) {
    countB++;
  }

  if (countA !== countB) {
    return false;
  }

  return true;
}

module.exports = deepEqual;
