/* eslint-disable no-unused-vars */
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
  if (a === b) {
    return true;
  }

  if (a == null || typeof (a) !== 'object'
      || b == null || typeof (b) !== 'object') {
    return false;
  }

  let aProps = 0;
  let bProps = 0;

  for (const property in a) {
    aProps += 1;
  }

  for (const property in b) {
    bProps += 1;

    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }

  return aProps === bProps;
}

module.exports = deepEqual;
