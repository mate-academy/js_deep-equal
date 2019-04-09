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
// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }
//
//   if (obj1 === null || typeof (obj2) !== 'object') {
//     return false;
//   }
//
//   var numPropertiesInObj1 = 0;
//   var numPropertiesInObj2 = 0;
//   for (var property in obj1) {
//     numPropertiesInObj1 += 1;
//   }
//   for (property in obj2) {
//     numPropertiesInObj2 += 1;
//     if (!(property in obj1) || !deepEqual(obj1[property], obj2[property])) {
//       return false;
//     }
//   }
//   return numPropertiesInObj1 === numPropertiesInObj2;
// }
function deepEqual(obj1, obj2) {
  if (obj1 === null || typeof (obj2) !== 'object' ||
      obj2 === null || typeof (obj1) !== 'object') {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (var property in obj1) {
    if (!(property in obj2) || !deepEqual(obj1[property], obj2[property])) {
      return false;
    }
  }
  return true;
}
module.exports = deepEqual;
