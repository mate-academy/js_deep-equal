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
  let bool = true;

  if (a === null || b === null) {
    bool = a === b;

    return bool;
  }

  if (typeof a !== 'object') {
    bool = a === b;

    return bool;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    if (typeof a[key] === 'object') {
      bool = deepEqual(a[key], b[key]);

      if (!bool) {
        return bool;
      }
    } else {
      bool = a[key] === b[key];

      if (!bool) {
        return bool;
      }
    }
  }

  return bool;
}

module.exports = deepEqual;
