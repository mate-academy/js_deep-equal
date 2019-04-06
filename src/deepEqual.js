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
  if (typeof (a) === 'number' && typeof (b) === 'number' && a === b) {
    return true;
  }
  if (a === null && b === null) {
    return true;
  }
  if (typeof (a) === 'object' && typeof (b) === 'object') {
    let str = '';
    let strTwo = '';
    let number = 0;
    let numberTwo = 0;
    for (let c in a) {
      if (a[c] === null) {
        return false;
      }
      if (typeof (a[c]) !== 'object') {
        str += a[c];
      } else if (typeof (a[c]) === 'object') {
        for (let e in a[c]) {
          if (a[c][e] !== null) {
            number += a[c][e];
          } else {
            return false;
          }
        }
      }
    }
    for (let d in b) {
      if (b[d] === null) {
        return false;
      }
      if (typeof (b[d]) !== 'object') {
        strTwo += b[d];
      } else {
        for (let r in b[d]) {
          if (b[d][r] !== null) {
            numberTwo += b[d][r];
          } else {
            return false;
          }
        }
      }
    }
    if (str === strTwo && number === numberTwo) {
      return true;
    }
  }
  if ((typeof (a) === 'object' && b === null) || (typeof (b) === 'object' && a === null)) {
    return false;
  } else {
    return false;
  }
}
module.exports = deepEqual;
