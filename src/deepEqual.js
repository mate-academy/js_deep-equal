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
  if (a === null || b === null) {
    if (a === null && b === null) {
      return true;
    } else {
      return false;
    }
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const sortedKeysA = Object.keys(a).sort();
    const sortedKeysB = Object.keys(b).sort();

    if (sortedKeysA.length !== sortedKeysB.length) {
      return false;
    }

    for (let i = 0; i < sortedKeysA.length; i++) {
      if (sortedKeysA[i] !== sortedKeysB[i]) {
        return false;
      }

      if (typeof a[sortedKeysA[i]] !== 'object'
      || typeof b[sortedKeysB[i]] !== 'object') {
        if (a[sortedKeysA[i]] !== b[sortedKeysB[i]]) {
          return false;
        }
      }

      if (typeof a[sortedKeysA[i]] === 'object'
      && typeof b[sortedKeysB[i]] === 'object') {
        if (!deepEqual(a[sortedKeysA[i]], b[sortedKeysB[i]])) {
          return false;
        }
      }
    }

    return true;
  }

  return a === b;
}

module.exports = deepEqual;
