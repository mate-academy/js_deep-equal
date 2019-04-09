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
  let isNotObject = arg => typeof arg !== 'object' || arg === null;
  let propsLength = (arr1, arr2) => Object.keys(arr1).length !== Object.keys(arr2).length;
  if (isNotObject(a) || isNotObject(b)) {
    return a === b;
  }
  if (propsLength(a, b)) {
    return false;
  }
  for (let prop in a) {
    if (!(prop in b) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }
  return true;
}

module.exports = deepEqual;
