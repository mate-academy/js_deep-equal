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
  if (a === b) {
    return true;
  }

  if (typeof (a) !== typeof (b)) {
    return false;
  }

  if (typeof (a) === 'object') {
    if (JSON.stringify(a).length !== JSON.stringify(b).length) {
      return false;
    }

    for (const aKey in a) {
      let count = 0;

      for (const bKey in b) {
        if (typeof (a[aKey]) === 'object') {
          return deepEqual(a[aKey], b[aKey]);
        }

        if (a[aKey] === b[bKey]) {
          count++;
        }
      }

      if (count !== 1) {
        return false;
      }
    }
  } else {
    if (a !== b) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
