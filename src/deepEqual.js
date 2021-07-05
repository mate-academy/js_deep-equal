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
  let flag = false;

  if (a === b) {
    flag = true;
  }

  if (typeof(a) === 'object'
  && typeof(b) === 'object'
  && a !== null
  && b !== null) {
    for (const property in a) {
      if (b.hasOwnProperty(property)) {
        flag = deepEqual(a[property], b[property]);
      }

      if (!flag) {
        return flag;
      }
    }

    for (const property in b) {
      if (!a.hasOwnProperty(property)) {
        return false;
      }
    }
  }

  return flag;
}

/**
 * Bonus function:
 * Translates given object to a string
 *
 * @param {object} obj
 *
 * @return {string}
 */

function objToString(obj) {
  let objString = '{ ';
  for (const key in obj) {
    objString += key + ': ';
    if (typeof(obj[key]) === 'object') {
      if (obj[key] === null) {
        objString += 'null, ';
      } else {
        objString += objToString(obj[key]);
      }
    } else {
      objString += obj[key] + ', ';
    }
  }
  objString += '}';
  return objString;
}

module.exports = deepEqual;
