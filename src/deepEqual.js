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
  if (a === null && b === null) {
    return true;
  } else if (a === null || b === null) {
    return false;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    for (const prop in a) {
      if (a.hasOwnProperty(prop) !== b.hasOwnProperty(prop)) {
        return false;
      }

      if (!deepEqual(a[prop], b[prop])) {
        return false;
      }
    }

    for (const prop in b) {
      if (typeof (a[prop]) === 'undefined') {
        return false;
      }
    }
    return true;
  }

  if (a !== b) {
    return false;
  }
  return true;
}

module.exports = deepEqual;
