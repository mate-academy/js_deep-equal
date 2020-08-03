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

    for (const i in a) {
      if (!b[i]) {
        return false;
      } else {
        if (typeof a[i] === 'object' && typeof b[i] === 'object') {
          if (Object.keys(a[i]).length !== Object.keys(b[i]).length) {
            return false;
          };

          for (const o in a[i]) {
            if (!b[i][o]) {
              return false;
            } else {
              if (typeof a[i][o] === 'object' && typeof b[i][o] === 'object') {
                if (Object.keys(a[i][o]).length
                !== Object.keys(b[i][o]).length) {
                  return false;
                };

                for (const p in a[i][o]) {
                  if (!b[i][o][p]) {
                    return false;
                  } else {
                    if (typeof a[i][o][p] === 'object'
                     && typeof b[i][o][p] === 'object') {
                      if (Object.keys(a[i][o][p]).length
                      !== Object.keys(b[i][o][p]).length) {
                        return false;
                      };

                      for (const z in a[i][o][p]) {
                        if (!b[i][o][p][z]) {
                          return false;
                        } else {
                          if (typeof a[i][o][p][z] === 'object'
                           && typeof b[i][o][p][z] === 'object') {
                            if (Object.keys(a[i][o][p][z]).length
                            !== Object.keys(b[i][o][p][z]).length) {
                              return false;
                            };

                            for (const x in a[i][o][p][z]) {
                              if (!b[i][o][p][z][x]) {
                                return false;
                              } else {
                                if (typeof a[i][o][p][z][x] === 'object'
                                 && typeof b[i][o][p][z][x] === 'object') {
                                  if (Object.keys(a[i][o][p][z][x]).length
                                  !== Object.keys(b[i][o][p][z][x]).length) {
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
                if (a[i][o] !== b[i][o]) {
                  return false;
                }
              }
            }
          }
        } else {
          if (a[i] !== b[i]) {
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
