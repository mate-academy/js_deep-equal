'use strict';

/**
 * Implement deepEqual function:
 *
 * Function compares 2 values
 * for primitives it compares types and values of given params
 * for objects it checks all fields and compare primitive values
 * inside all fields. Nested objects are compared too.
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
 *
 */

function deepEqual(a, b) {
  let typeOfA = typeof (a);
  let typeOfB = typeof (b);

  if ((typeOfA === typeOfB)) {
    if ((typeOfA === 'object' && a === null) || typeOfA === undefined || typeOfA !== 'object') {
      return comparePrimitives(a, b);
    }
    return compareObjects(a, b);
  }
  console.log('false \t \t they are different types');
  return false;
}

function comparePrimitives(a, b) {
  console.log(a === b);
  return a === b;
}

function compareObjects(objA, objB) {
  if (objA === null || objB === null) {
    return false;
  }
  let propertiesA = Object.keys(objA);
  let propertiesB = Object.keys(objB);

  if (typeof (objA) === 'object') {
    if (propertiesA.length === propertiesB.length) {
      for (var eachProperty of propertiesA) {
        if (objB.hasOwnProperty(eachProperty) && objB[eachProperty]) {
          // if (propertiesA[eachProperty] === null || propertiesA[eachProperty] === undefined) {return false;}
          return compareObjects(objA[eachProperty], objB[eachProperty]);
        } else {
          console.log('false \t\t b has no same property as object a');
          return false;
        }
      }
    } else {
      console.log('false \t \t length of object is not the same therefore they are not equal');
      return false;
    }
  } else {
    return comparePrimitives(objA, objB);
  }
}

module.exports = deepEqual;

deepEqual({ test: 5 }, { test: 5, extra: null });
deepEqual({ test: { abc: 5 } }, { test: { def: 5 } });
