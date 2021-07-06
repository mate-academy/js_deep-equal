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
  if (typeof (a) !== 'object' || a === null || b === null) {
    return a === b;
  };

  const arrA = Object.getOwnPropertyNames(a);
  const arrB = Object.getOwnPropertyNames(b);

  if (arrA.sort().join('') !== arrB.sort().join('')) {
    return false;
  };

  for (const key in a) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    };
  };

  return true;
}

module.exports = deepEqual;
