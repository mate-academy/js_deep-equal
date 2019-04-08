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
  if (a === b) {
    return true;
  }
  if (a === null || typeof (a) !== 'object' ||
    b === null || typeof (b) !== 'object') {
    return false;
  }
  var propertiesInA = 0;
  var propertiesInB = 0;
  for (var property in a) {
    propertiesInA++;
  }
  for (property in b) {
    propertiesInB++;
    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return propertiesInA === propertiesInB;
}// write code here

module.exports = deepEqual;
