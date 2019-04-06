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

function isEquals(value1, value2) {
  if (typeof value1 === typeof value2) {
    if (value1 === value2) {
      return true;
    }
    return false;
  }
  return false;
}

function isObjectNotNull(elem, elem2) {
  let result;
  if (elem === null || elem2 === null) {
    result = false;
  } else if (typeof elem === 'object') {
    result = true;
  } else {
    result = false;
  }
  return result;
}

const objLength = (obj) => Object.keys(obj).length;

function deepEqual(a, b) {
  if (isObjectNotNull(a, b)) {
    if (objLength(a) === objLength(b)) {
      for (let key in a) {
        let keyOfA = a[key];
        let keyOfB = b[key];
        if (isObjectNotNull(a[key], b[key])) {
          if (deepEqual(a[key], b[key])) {
            continue;
          }
          return false;
        }
        if (Object.keys(b).includes(key)) {
          if (keyOfA !== keyOfB) {
            return false;
          }
          continue;
        }
        return false;
      }
      return true;
    }
    return false;
  }
  return isEquals(a, b);
}

module.exports = deepEqual;
