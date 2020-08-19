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
  switch (true) {
    case a === b:
      return true;

    case a === null || b === null:
    case (typeof a !== 'object') || (typeof b !== 'object'):
    case Object.keys(a).length !== Object.keys(b).length:
      return false;

    default:
      return Object.keys(a).every(key => deepEqual(a[key], b[key]));
  }
}

module.exports = deepEqual;
