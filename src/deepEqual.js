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
  if (a === null || b === null
    || typeof (a) !== 'object' || typeof (b) !== 'object') {
    return a === b;
  }

  const aProperty = Object.keys(a).sort();
  const bProperty = Object.keys(b).sort();

  if (aProperty.length !== bProperty.length) {
    return false;
  }

  for (let i = 0; i < aProperty.length; i++) {
    if (aProperty[i] !== bProperty[i]) {
      return false;
    }

    if (a[aProperty[i]] !== b[bProperty[i]]
      && (typeof (a) !== 'object' || typeof (b) !== 'object')) {
      return false;
    }

    if (!deepEqual(a[aProperty[i]], b[bProperty[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
