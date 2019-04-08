'use strict';

/**
 * Implement deepEqual function:
 *
 * Function compares 2 values
 * for primitives it compares types and values of given params
 * for objects it checks all fields and compare primitive values
 * inside all fields. Nested objects are compared too.
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
  if (a === b) {
    return a === b;
  } else if ((typeof a === typeof b && typeof a === 'object' && a !== null && b !== null)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (let property of Object.keys(a)) {
      if (b.hasOwnProperty(property)) {
        if (!deepEqual(a[property], b[property])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = deepEqual;

deepEqual({ test: 5, extra: 123 }, { test: 5, extra: null });

deepEqual(5, 5);
deepEqual(1, 2);
deepEqual(10, 10);
deepEqual('10', 10);
deepEqual(0, false);
deepEqual({ test: 5 }, { test: 5, sd: 6 });
deepEqual({ test: { abc: 5 } }, { test: { abc: 5 } });
deepEqual({ test: { abc: 5 } }, { test: { abc: 5, def: 4 } });

deepEqual({ test: 5, extra: 123 }, { test: 5, extra: null });
deepEqual({ test: { abc: { ds: 13 } } }, { test: { abc: { as: 12 } } });
