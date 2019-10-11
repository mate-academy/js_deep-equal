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
  typesCopmaring(a, b);
  functionsComparing(a, b);
  if (a instanceof Object && b instanceof Object) {
    if (countProps(a) !== countProps(b)) {
      return false;
    }
    for (const key in a) {
      const r = deepEqual(a[key], b[key]);
      if (!r) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}

function countProps(obj) {
  let count = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

function typesCopmaring(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
}

function functionsComparing(a, b) {
  if (typeof (a) === 'function') {
    return a.toString() === b.toString();
  }
}

module.exports = deepEqual;
