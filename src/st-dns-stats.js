import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains ) {
  let result = {}
  let regexp = /(\w+)/g;
  for (let item of domains) {
    let arr = item.match(regexp)
    let sum = ''
    for (let i = arr.length - 1; i >= 0; i--) {
      sum = sum + '.' + arr[i];
      if (result.hasOwnProperty(sum)) result[sum]++
      else result[sum] = 1
    }
  
  }
  return result
}
