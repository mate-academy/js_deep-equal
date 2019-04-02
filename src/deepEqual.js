'use strict';

/**
 * Implement deepEqual function:
 * Function compares 2 values
 * for primitives it should compare types and values of given params
 * for objects it should check all fields and compare primitive values
 * inside all fields. Nested objects should be compared too.
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 *
 * deepEqual(1, 2) === false
 * deepEqual(10, 10) === true
 * deepEqual('10', 10) === false
 * deepEqual(0, false) === false
 * deepEqual({test: 5}, {test: 5}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5}}) === true
 * deepEqual({test: {abc: 5}}, {test: {abc: 5, def: 4}}) === false
 *
 */

function deepEqual(a, b) {
  // write code here
}

module.exports = deepEqual;
