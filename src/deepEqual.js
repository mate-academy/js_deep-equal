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
const _ = require('lodash');
function deepEqual(a, b) {
  if (typeof a !== 'object' && typeof b !== 'object') {
    return a === b;
  }
  let result = false;
  if (typeof a === 'object' && typeof b === 'object') {
    result = _.isEqual(a, b);
  }
  return result;
}

module.exports = deepEqual;
