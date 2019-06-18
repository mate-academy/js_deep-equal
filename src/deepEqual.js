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

  if (a == null || typeof a !== 'object'
  || b == null || typeof b !== 'object') {
    return false;
  }

  let aValues = 0;
  let bValues = 0;

  for (const value in a) {
    aValues += 1;
  }

  for (const value in b) {
    bValues += 1;
    if (!(value in a) || !deepEqual(a[value], b[value])) {
      return false;
    }
  }
  
  return aValues === bValues;
}

module.exports = deepEqual;
