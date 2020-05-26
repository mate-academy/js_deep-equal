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
  if (typeof (a) !== typeof (b)) {
    return false;
  }

  if ((typeof (a) === 'number')
  || (typeof (a) === 'string')
  || (a === null || b === null)) {
    return a === b;
  }

  if (typeof (a) === 'object') {
    return Equal(a, b);
  }
}

function Equal(a, b) {
  // let counterA = 0;
  // let counterB = 0;

  for (const key in a) {
    // counterA++;
    // console.log(a[key], key, b[key], key);

    if (!b.hasOwnProperty(key)) {
      return false;
    }

    if (typeof (a[key]) === 'object' && typeof (b[key]) === 'object') {
      Equal(a[key], b[key]);
    }

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
module.exports = deepEqual;
