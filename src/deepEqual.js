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
  function isObjects(one, two) {
    if (one === null || two === null) {
      return false;
    } else if ((typeof (one) === 'object')
      && (typeof (two) === 'object')) {
      return true;
    }
    return false;
  }

  function keyCounter(objOne) {
    let count = 0;

    for (const key in objOne) {
      // 38 line just for linter
      console.log(objOne[key]);
      count++;
    }
    return count;
  }

  function objectComperison(a, b) {
    if (isObjects(a, b)) {
      if (keyCounter(a) !== keyCounter(b)) {
        return false;
      }

      for (const key in a) {
        if (isObjects(a[key], b[key])) {
          if (!objectComperison(a[key], b[key])) {
            return false;
          };
        } else if (a[key] !== b[key]) {
          return false;
        };
      }
    } else if (a !== b) {
      return false;
    }
    return true;
  }

  return objectComperison(objectOne, objectTwo);
}

module.exports = deepEqual;
