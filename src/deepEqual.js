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
  // write code here
  if (a === null && b === null) {
    return true;
  } else if (a === null || b === null) {
    return false;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    };

    for (const i1 in a) {
      if (!b[i1]) {
        return false;
      } else {
        if (typeof a[i1] === 'object' && typeof b[i1] === 'object') {
          if (Object.keys(a[i1]).length !== Object.keys(b[i1]).length) {
            return false;
          };

          for (const i2 in a[i1]) {
            if (!b[i1][i2]) {
              return false;
            } else {
              if (typeof a[i1][i2] === 'object'
               && typeof b[i1][i2] === 'object') {
                if (Object.keys(a[i1][i2]).length
                !== Object.keys(b[i1][i2]).length) {
                  return false;
                };

                for (const i3 in a[i1][i2]) {
                  if (!b[i1][i2][i3]) {
                    return false;
                  } else {
                    if (typeof a[i1][i2][i3] === 'object'
                     && typeof b[i1][i2][i3] === 'object') {
                      if (Object.keys(a[i1][i2][i3]).length
                      !== Object.keys(b[i1][i2][i3]).length) {
                        return false;
                      };

                      for (const i4 in a[i1][i2][i3]) {
                        if (!b[i1][i2][i3][i4]) {
                          return false;
                        } else {
                          if (typeof a[i1][i2][i3][i4] === 'object'
                           && typeof b[i1][i2][i3][i4] === 'object') {
                            if (Object.keys(a[i1][i2][i3][i4]).length
                            !== Object.keys(b[i1][i2][i3][i4]).length) {
                              return false;
                            };

                            for (const i5 in a[i1][i2][i3][i4]) {
                              if (!b[i1][i2][i3][i4][i5]) {
                                return false;
                              } else {
                                if (typeof a[i1][i2][i3][i4][i5] === 'object'
                                 && typeof b[i1][i2][i3][i4][i5] === 'object') {
                                  if (Object.keys(a[i1][i2][i3][i4][i5])
                                    .length
                                  !== Object.keys(b[i1][i2][i3][i4][i5])
                                    .length) {
                                    return false;
                                  };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (a[i1][i2] !== b[i1][i2]) {
                  return false;
                }
              }
            }
          }
        } else {
          if (a[i1] !== b[i1]) {
            return false;
          }
        }
      }
    }

    return true;
  } else {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = deepEqual;
