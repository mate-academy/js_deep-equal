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
  // check for primitive types
  if (a === b) {
    return true;
  }

  if (
    a === null
    || b === null
    || typeof a !== 'object'
    || typeof b !== 'object'
  ) {
    return false;
  }

  if (Object.keys(a).length !== Object.values(b).length) {
    return false;
  }

  for (const property in a) {
    if (!(property in b) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
