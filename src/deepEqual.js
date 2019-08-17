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
  const paramA = a;
  const paramB = b;

  if (typeof paramA !== typeof paramB) {
    return false;
  } else if (typeof paramA !== 'object') {
    return paramA === paramB;
  }

  if (paramA === null && paramB === null) {
    return true;
  } else if (paramA === null || paramB === null) {
    return false;
  }
  const keysParamA = Object.keys(paramA);
  const keysParamB = Object.keys(paramB);

  if (keysParamA.length !== keysParamB.length) {
    return false;
  }

  for (const key in paramA) {
    if (paramA.hasOwnProperty(key) !== paramB.hasOwnProperty(key)) {
      return false;
    }
    if (!deepEqual(paramA[key], paramB[key])) {
      return false;
    }
  }

  return true;
}

module.exports = deepEqual;
