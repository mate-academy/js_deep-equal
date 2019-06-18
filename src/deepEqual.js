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
  if (typeof (a) === typeof (b) && typeof (a) === 'object') {
    if (a === null || b === null) {
      return a === b;
    } else {
      return goDeep(a, b);
    }
  }
  return a === b;
}
function goDeep(obj1, obj2) {
  let check;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (var key in obj1) {
    if (typeof (obj1[key]) === typeof (obj2[key]) && typeof (obj1[key]) === 'object') {
      check = goDeep(obj1[key], obj2[key]);
    } else {
      check = (obj1[key] === obj2[key]);
    }
    if (!check) {
      return check;
    }
  }
  return check;
}

module.exports = deepEqual;
