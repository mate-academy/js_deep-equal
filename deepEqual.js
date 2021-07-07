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
  let typeOfA = typeof a;
  let typeOfB = typeof b;

  if (typeOfA === typeOfB) {
    switch (typeOfA) {
      case 'string':
      case 'number':
        return (isEnumerable(a))
          ? a === b
          : false; // I don't know how to check it! That is not discribed in the task!
      case 'object':
        if (a !== null && b !== null) {
          return isEqualKeysOfObjects(a, b) && isEqualKeysOfObjects(b, a);
        } else {
          return a === null && b === null;
        }
      default:
        return false; // I don't know how to check it! That is not discribed in the task!
    }
  } else {
    return false;
  }
}

function isEnumerable(someNumber) {
  someNumber = +someNumber;
  return (someNumber === +someNumber.toFixed(0));
}

function isEqualKeysOfObjects(a, b) {
  for (let key in a) {
    if (typeof a[key] === 'object') { // (*) Доступ к ключю a.key видит undefined... ?
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    } else {
      if (isEnumerable(a[key])) {
        if (a[key] !== b[key]) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = deepEqual;
