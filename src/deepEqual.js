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
  if (typeof a !== typeof b) {
    return false;
  } else if (typeof a !== 'object') {
    return a === b;
  } else if (a === null & b === null) {
    return true;
  } else if (a === null || b === null) {
    return false;
  }

  if (a instanceof Object && b instanceof Object) {
    const firstParamKeys = Object.keys(a).sort();
    const secondParamKeys = Object.keys(b).sort();

    for (const key in firstParamKeys) {
      if (!deepEqual(a[firstParamKeys[key]], b[secondParamKeys[key]])) {
        return false;
      }
    }
  }
  return true;
}

module.exports = deepEqual;
