'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===
 * Objects are equal if all the own enumerable properties are equal
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 *
 * deepEqual(1, 2) === false
 * deepEqual(10, 10) === true
 * deepEqual('10', 10) === false
 * deepEqual(0, false) === false
 * deepEqual({test: 5}, {test: 5}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5}}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5, def: 4}}) === false
 */
function deepEqual(a, b) {
  let typesBooleanResult = typeof a === 'object' && typeof b === 'object' && a !== null && b !== null;
  if (!typesBooleanResult) {
    return a === b;
  }
  if (typesBooleanResult) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (let key in a) {
      if (!b.hasOwnProperty(key)) {
        return false;
      } else if (b.hasOwnProperty(key) && b[key] === a[key]) {
        continue;
      } else if (b.hasOwnProperty(key) && b[key] !== a[key]) {
        return deepEqual(b[key], a[key]);
      } else {
        return false;
      }
    } return true;
  }
};
module.exports = deepEqual;
