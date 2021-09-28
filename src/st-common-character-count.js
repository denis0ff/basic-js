import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort()
  let arr2 = s2.split('').sort()
  let obj1 = {}
  let obj2 = {}
  let result = []
  let count = 1
  let temp
  let i = 0
  let res = 0
  for (let char of arr1) { 
    if (char === temp) {
      count++;
      result[i] = [count, char]
      continue;
    } else count = 1
    result.push([count, char])
    temp = char;
    i++
  }
  for (let item of result) {
    obj1[item[1]] = item[0]
  }
  result = []
  count = 1
  i = 0
  for (let char of arr2) { 
    if (char === temp) {
      count++;
      result[i] = [count, char]
      continue;
    } else count = 1
    result.push([count, char])
    temp = char;
    i++
  }
  for (let item of result) {
    obj2[item[1]] = item[0]
  }
  for (let item in obj2) {
    if (obj1.hasOwnProperty(item)) {
      res = res + Math.min(obj1[item], obj2[item])
    }
  }
  return res
}
