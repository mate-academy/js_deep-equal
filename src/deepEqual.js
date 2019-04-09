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

function objectsCompare(a, b) {
  let isEqual;
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let item in a) {
    if (typeof a[item] === typeof b[item] && typeof a[item] === 'object') {
      isEqual = objectsCompare(a[item], b[item]);
    } else {
      isEqual = (a[item] === b[item]);
    }
    if (!isEqual) {
      return isEqual;
    }
  }
  return isEqual;
}

function deepEqual(a, b) {
  if (typeof a === typeof b && typeof a === 'object') {
    if (a === null || b === null) {
      return a === b;
    } else {
      return objectsCompare(a, b);
    }
  } else {
    return a === b;
  }
}

module.exports = deepEqual;
