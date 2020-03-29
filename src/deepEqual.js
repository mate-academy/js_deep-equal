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

  if (isNull(a) || isNull(b)) {
    return false;
  }

  if (isPrimitive(a) && isPrimitive(b)) {
    return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    if (!b.hasOwnProperty(key)) {
      return false;
    }
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

/**
 * This function check if object is primitive.
 *
 * @param {object} obj
 * @returns {boolean}
 */
function isPrimitive(obj) {
  return obj !== Object(obj);
}

/**
 * This function check if value is null.
 *
 * @param {any} value
 * @returns {boolean}
 */
function isNull(value) {
  return value === null;
}

module.exports = deepEqual;
