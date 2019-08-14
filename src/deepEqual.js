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
  if (typeof a !== typeof b) {
    return false;
  } else if (typeof a !== 'object') {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  } else {
    if (a === null && b === null) {
      return true;
    } else if (a === null || b === null) {
      return false;
    }

    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let i = 0; i < aKeys.length; i++) {
      if (aKeys[i] === bKeys[i]) {
        if (deepEqual(a[aKeys[i]], b[aKeys[i]]) === false) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = deepEqual;
