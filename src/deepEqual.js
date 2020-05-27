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
  if (JSON.stringify(a).length !== JSON.stringify(b).length) {
    return false;
  } else if (a === null && b === null) {
    return true;
  };

  if (typeof a === 'object' && typeof b === 'object') {
    for (const key of Object.keys(a)) {
      if ((key in a) === false || deepEqual(a[key], b[key]) === false) {
        return false;
      } else {
        return true;
      };
    };
  } else {
    return a === b;
  }
};

module.exports = deepEqual;
