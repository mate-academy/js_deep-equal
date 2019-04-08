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
  // write code here
  let typeOfA = typeof a;
  let typeOfB = typeof b;

  if (typeOfA === typeOfB && typeOfA !== null && typeOfB !== null) {
    if (typeOfA === 'object') {
      if (!isEqualObjectsByKeys(a, b)) {
        return false;
      }
      if (!isEqualObjectsByKeys(b, a)) {
        return false;
      }
      return true;
    } else {
      return a === b;
    }
  } else {
    return a === null && b === null;
  }
}

function isEqualObjectsByKeys(a, b) {
  for (let key in a) {
    if (typeof a[key] === 'object') { // (*) Доступ к ключю a.key видит undefined... Почему так?
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    } else {
      if (a[key] !== b[key]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = deepEqual;
