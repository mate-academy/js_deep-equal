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
  if ((a === null && b !== null) || (a !== null && b === null)) {
    return false;
  }
  if (typeof (a) === 'object' && typeof (b) === 'object') {
    let countA = 0;
    let countB = 0;
    let strA = '';
    let strB = '';
    let numberA = 0;
    let numberB = 0;
    for (let key in a) {
      countA++;
      if (a[key] === 'object') {
        deepEqual(a[key]);
      } else {
        for (let item in a[key]) {
          if (typeof (a[key][item]) === 'string') {
            strA += a[key][item];
          } else if (a[key][item] === null) {
            return false;
          } else {
            numberA += a[key][item];
          }
        }
      }
    }
    for (let key in b) {
      countB++;
      if (b[key] === 'object') {
        deepEqual(b[key]);
      } else {
        for (let item in b[key]) {
          if (typeof (b[key][item]) === 'string') {
            strB += b[key][item];
          } else if (b[key][item] === null) {
            return false;
          } else {
            numberB += b[key][item];
          }
        }
      }
    }
    if ((strA === strB && numberA === numberB) && (countA === countB)) {
      return true;
    } else {
      return false;
    }
  }
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    if (a - b === 0) {
      return true;
    } else {
      return false;
    }
  } if (a !== false && b === false) {
    return false;
  }
}

module.exports = deepEqual;
