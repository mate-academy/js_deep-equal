'use strict';

/**
 * Implement deepEqual function:
 *
 * Non object types are compared with ===. Objects are equal if all the own
 * enumerable properties are equal
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
  if (
    a === null
    || b === null
    || (typeof a === 'number' && typeof b === 'number')
  ) {
    return a === b;
  }
  if (typeof (a) !== typeof (b)) {
    return false;
  }

  const isObject = val => val && typeof val === 'object';

  let equality = {};
  const merged = { ...a, ...b };

  for (const key in merged) {
    const value1 = a[key];
    const value2 = b[key];

    if (isObject(value1) || isObject(value2)) {
      equality = deepEqual(value1 || {}, value2 || {});
    } else {
      equality = value1 === value2;
      if (equality !== true) {
        return false;
      }
    }
  }

  return equality;
}

module.exports = deepEqual;
