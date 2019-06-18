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
  if (a === b) {
    return true;
  }

  // проверяем является ли объектом во внешней функции:
  // проверяте на тип === объект и !== null
  if (!isObject(a) || !isObject(b)) {
    return false;
  }

  // Количество своих ключей в объекте.
  // Если не равны, то сравнивать уже не надо.
  // Object.keys() - превращает в список все св-ва
  // Object.keys(a).length
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  // перебираем все ключи объекта a(список/массив из-за Object.keys())
  for (const key of Object.keys(a)) {
    // проверка на несповпадение хоть одного условия VALUE
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// внешняя ф-ция: проверяте на тип === объект и !== null
function isObject(value) {
  return typeof value === 'object' && value !== null;
}

module.exports = deepEqual;
