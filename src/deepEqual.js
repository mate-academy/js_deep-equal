'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===. Objects are equal if all the own
 * enumerable properties are equal
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

  if (typeOfA === typeOfB && a === b) { // Если сущности равны сами по себе...
    return true;
  } else if (typeOfA !== 'object' || typeOfB !== 'object') { // Неравентсво допустимо только для объктов, для них спец проверка...
    return false;
  }

  if (a !== null && b !== null) {
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
