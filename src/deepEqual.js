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
  const _isObj = arg => typeof arg === 'object' && arg !== null;
  const _getKeysLength = arg => Object.keys(arg).length;

  if (a === b) {
    return true;
  }
  if (_isObj(a) && _isObj(b)) {
    if (_getKeysLength(a) !== _getKeysLength(b)) {
      return false;
    }
    for (let prop in a) {
      if (!(prop in b)) {
        return false;
      }
      if (!deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = deepEqual;
