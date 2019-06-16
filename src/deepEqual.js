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
const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  const isObject = (object) => {
    return object !== null && object.constructor === Object;
  };

  if (isObject(a) && isObject(b)) {
    const aStringify = JSON.stringify(a);
    const bStringify = JSON.stringify(b);

    if (aStringify.length !== bStringify.length) {
      return false;
    }

    for (const key in a) {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

module.exports = deepEqual;
