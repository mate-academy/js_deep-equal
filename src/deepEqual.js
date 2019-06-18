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
  if (a === null || b === null) {
    return a === b;
  } else if (typeof a !== 'object' && typeof b !== 'object') {
    return a === b;
  } else {
    let keysCounterA = 0;
    for (const key in a) {
      if (!a.hasOwnProperty(key)) {
        continue;
      }
      keysCounterA++;
      if (!(key in b)) {
        return false;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    let keysCounterB = 0;
    for (const key in b) {
      if (!b.hasOwnProperty(key)) {
        continue;
      }
      keysCounterB++;
    }
    if (keysCounterA !== keysCounterB) {
      return false;
    }
  }
  return true;
}

module.exports = deepEqual;
