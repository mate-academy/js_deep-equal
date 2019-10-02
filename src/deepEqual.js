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
    let check = (a === b);

    if ((typeof a === 'object' && typeof b === 'object') && (a !== null && b !== null)) {
      for (const key in a) {
        if (b.hasOwnProperty(key)) {
          check = deepEqual(a[key], b[key]);

          if (!check) {
            return check;
          }
        }
      }
      for (const key in b) {
        if (!a.hasOwnProperty(key)) {
          return false;
        }
      }
    }

    return check;
}

module.exports = deepEqual;
