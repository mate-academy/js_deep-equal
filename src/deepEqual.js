'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===. Objects are equal if all the own
 * enumerable properties are equal
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
  if (a === b) {
    return true;
  }
  if (a === null || typeof (a) !== 'object' ||
    b === null || typeof (b) !== 'object') {
    return false;
  }
  var countPropA = 0;
  var countPropB = 0;
  for (var key in a) {
    countPropA++;
  }
  for (key in b) {
    countPropB++;
    if (!(key in a) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return countPropA === countPropB;
}// write code here

module.exports = deepEqual;
