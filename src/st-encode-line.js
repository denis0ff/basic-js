import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str ) {
  let count = 1
  let result = []
  let temp
  let i = -1
  for (let char of str) { 
    if (char === temp) {
      count++;
      result[i] = [count, char]
      continue;
    } else count = 1
    if (count = 1) result.push(['', char])
    else result.push([count, char])
    temp = char;
    i++
  }
  return result.flat(+Infinity).join('')
}
