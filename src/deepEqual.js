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
 */
function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (typeof a === typeof b && typeof a === 'object' && a !== null && b !== null) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (let key of Object.keys(a)) {
      if (b.hasOwnProperty(key)) {
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = deepEqual;
