import {strict as assert} from 'assert';
import capitalize from "../src/capitalize.js";

assert.strictEqual(capitalize(''), 'Hello');
assert.strictEqual(capitalize('hello'), ' ');

//Ручные утверждения
// if (capitalize('hello') !== 'Hello') {
//  throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//  throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!');
