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
function deepEqual(objectOne, objectTwo) {
  function isObject(one) {
    if (typeof (one) === 'object' && one !== null) {
      return true;
    }
    return false;
  }

  function keyCounter(objOne) {
    if (objOne) {
      return Object.keys(objOne).length;
    }
    return 0;
  }

  if (isObject(objectOne)) {
    if (keyCounter(objectOne) !== keyCounter(objectTwo)) {
      return false;
    }

    for (const key in objectOne) {
      if (!isObject(objectOne[key])
        && objectOne[key] !== objectTwo[key]) {
        return false;
      } else if (!deepEqual(objectOne[key], objectTwo[key])) {
        return false;
      };
    };
  } else if (objectOne !== objectTwo) {
    return false;
  }

  return true;
}

module.exports = deepEqual;
