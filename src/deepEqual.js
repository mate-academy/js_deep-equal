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
    if (typeof a === 'object' && typeof b === 'object') {
      if (a === null || b === null) {
        return a === b;
      } else {
        return isObjectsEqual(a, b);
      }
    } else {
      return a === b;
    }
  }

  function isObjectsEqual(obj1, obj2) {
    let equal = false;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return equal;
    } else {
      for (let key in obj1) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          equal = isObjectsEqual(obj1[key], obj2[key]);
        } else {
          equal = obj1[key] === obj2[key];
        }
        if (equal === false) {
          return equal;
        }
      }
      return equal;
    }
}

module.exports = deepEqual;
