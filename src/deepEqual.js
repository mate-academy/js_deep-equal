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
  // write code here
  let typeOfA = typeof a;
  let typeOfB = typeof b;

  // If data equal...
  if (typeOfA === typeOfB && a === b) {
    return true;
  // Only objects can be toataly non equal
  } else if (typeOfA !== 'object' || typeOfB !== 'object') {
    return false;
  }

  if (a !== null && b !== null) {
    // Objects are non equal if there are different amount of keys in them
    if (Object.keys(a).length !== Object.keys(b).length) { // Если количество ключей объектов не раное - они точно не равны.
      return false;
    }
    for (let key in a) {
      if (!(key in b)) {
        return false;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true; // Если программа выполнилась до этого момента - сущности равны.
}

module.exports = deepEqual;
