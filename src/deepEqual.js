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
  let x = {};
  let y = {};

  if (((typeof (a) === 'object')
    || (typeof (b) === 'object'))
    && (a !== null && b !== null)) {
    if (recurs(a, b)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

  function recurs(a1, b1) {
    let isLast = true;

    for (const key in a1) {
      if (b1.hasOwnProperty(key)) {
        if (a1[key] !== b1[key] && typeof (a1[key]) !== 'object') {
          return false;
        }

        if (typeof (a1[key]) === 'object' || typeof (b1[key]) === 'object') {
          isLast = false;
          x = a1[key];
          y = b1[key];
        }
      } else {
        return false;
      }
    }

    if (Object.keys(a1).length !== Object.keys(b1).length) {
      for (const key in b1) {
        if (a1.hasOwnProperty(key)) {
          if (b1[key] !== a1[key] && typeof (b1[key]) !== 'object') {
            return false;
          }

          if (typeof (a1[key]) === 'object' || typeof (b1[key]) === 'object') {
            isLast = false;
            x = a1[key];
            y = b1[key];
          }
        } else {
          return false;
        }
      }
    }

    if (!isLast) {
      return recurs(x, y);
    }

    return true;
  }
}

module.exports = deepEqual;
