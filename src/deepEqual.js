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
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'object' && a !== b) {
    if (a === null || b === null) {
      return false;
    }

    return JSON.stringify(sortObject(a)) === JSON.stringify(sortObject(b));
  }

  return a === b;
}

function sortObject(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObject = {};

  for (const key of sortedKeys) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      sortedObject[key] = sortObject(obj[key]);
      continue;
    }

    sortedObject[key] = obj[key];
  }

  return sortedObject;
}

module.exports = deepEqual;
