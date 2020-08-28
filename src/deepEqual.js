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
  } else if (a === null || b === null) {
    return false;
  }

  if ((typeof (a) !== 'object' && typeof (b) !== 'object')
   || (Object.keys(a).length !== Object.keys(b).length)) {
    return false;
  }

  if (typeof (a) === 'object' && typeof (b) === 'object') {
    for (const key of Object.keys(a)) {
      if (!b.hasOwnProperty(key)) {
        return false;
      } else {
        const recursiveCheck = deepEqual(a[key], b[key]);

        if (!recursiveCheck) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = deepEqual;
