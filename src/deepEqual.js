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
  let aContainer = {};
  let bContainer = {};

  // check the type of variables
  if (
    (typeof (a) === 'object'
    && typeof (b) === 'object')
    && (a !== null && b !== null)
  ) {
    let isLast = true;

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        if (a[key] !== b[key] && typeof (a[key]) !== 'object') {
          return false;
        }

        // if it's embeded object - call deepEqual function again
        if (
          typeof (a[key]) === 'object'
          && typeof (b[key]) === 'object'
        ) {
          isLast = false;
          aContainer = a[key];
          bContainer = b[key];
        }
      } else {
        return false;
      }
    }

    if (!isLast) {
      return deepEqual(aContainer, bContainer);
    }

    return true;
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}

module.exports = deepEqual;
