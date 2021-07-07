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
const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  } else if (
    (typeof a === 'object' && typeof b === 'object')
  ) {
    if (JSON.stringify(a).length !== JSON.stringify(b).length) {
      return false;
    }
    for (const prop in a) {
      if (!deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
module.exports = deepEqual;
