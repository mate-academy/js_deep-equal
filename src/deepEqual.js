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
  if (a === null && b === null) {
    return true;
  }

  if ((a !== null && b === null)
  || (a === null && b !== null)) {
    return false;
  }

  if (typeof a !== 'object' && typeof b !== 'object') {
    return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  let check = false;

  for (const proporties in a) {
    if (proporties in b) {
      check = deepEqual(a[proporties], b[proporties]);
      if (!check) {
        break;
      };
    } else {
      check = false;
      break;
    }
  }

  return check;
}

module.exports = deepEqual;
