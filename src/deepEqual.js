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
  let firstContainer = {};
  let secondContainer = {};

  // check the type of variables
  if (((typeof (a) === 'object')
    || (typeof (b) === 'object'))
    && (a !== null && b !== null)) {
    // if the type of one of the variables is object - call recursive function
    if (recurs(a, b)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

  function recurs(first, second) {
    let isLast = true;

    if (Object.keys(first).length !== Object.keys(second).length) {
      return false;
    }

    for (const key in first) {
      if (second.hasOwnProperty(key)) {
        if (first[key] !== second[key] && typeof (first[key]) !== 'object') {
          return false;
        }

        // if it's embeded object - call recursive function again
        if (typeof (first[key]) === 'object'
          || typeof (second[key]) === 'object') {
          isLast = false;
          firstContainer = first[key];
          secondContainer = second[key];
        }
      } else {
        return false;
      }
    }

    if (!isLast) {
      return recurs(firstContainer, secondContainer);
    }

    return true;
  }
}

module.exports = deepEqual;
