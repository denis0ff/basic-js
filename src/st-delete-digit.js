import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let max = 0;
  let str = `${n}`.split('')
  for (let i= 0; i < str.length; i++) {
    let temp = str[i]
    delete str[i]
    if (max < str.join(''))
      max = str.join('')
    str[i] = temp
  }
  return +max
}
