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
  const arr = [];

  if (typeof (a) === 'object'
    && typeof (b) === 'object'
    && (a !== null && b !== null)) {
    if (Object.keys(a).length === Object.keys(b).length) {
      for (const key in a) {
        if (b.hasOwnProperty(key)) {
          if (typeof (a[key]) === 'object'
            && typeof (b[key]) === 'object'
            && Object.keys(a[key]).length === Object.keys(b[key]).length) {
            arr.push(deepEqual(a[key], b[key]));
          } else {
            if (a[key] !== b[key]) {
              return false;
            }
          }
        } else {
          return false;
        }
      }

      for (const el of arr) {
        if (!el) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  } else {
    return (a === b);
  }
}

module.exports = deepEqual;
