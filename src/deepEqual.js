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
  if (typeof a === 'object' && typeof b === 'object'
    && a !== null && b !== null) {
    let arrA = Object.keys(a);
    let arrB = Object.keys(b);
    const newA = { ...a };
    const newB = { ...b };

    for (let i = 0; i < arrA.length && i < arrB.length; i++) {
      const objectName = arrA[i];

      if (!arrB.includes(arrA[i]) || arrA.length !== arrB.length) {
        return false;
      }

      if (typeof newA[objectName] === 'object') {
        arrA.push(Object.keys(newA[objectName]));
        arrB.push(Object.keys(newB[objectName]));
        arrA = arrA.flat();
        arrB = arrB.flat();
        Object.assign(newA, newA[objectName]);
        delete newA[objectName];
        Object.assign(newB, newB[objectName]);
        delete newB[objectName];
      }

      if (newA[objectName] !== newB[objectName]) {
        return false;
      }

      if (i === arrA.length - 1) {
        return true;
      }
    }
  }

  return a === b;
};

module.exports = deepEqual;
