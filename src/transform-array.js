import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) throw new NotImplementedError(`'arr' parameter must be an instance of the Array!`);
  for (let i = 0; i <arr.length; i++) {
    if (/--double-next|--discard-prev|--discard-next|--double-prev/.test(arr[i])) {
      continue
    }
    if (arr[i-1] === '--double-next') {
      result.push(arr[i])
    }
    if (arr[i+1] === '--discard-prev') {
      continue
    }
    if (arr[i-1] === '--discard-next') {
      continue
    }
    if (arr[i+1] === '--double-prev') {
      result.push(arr[i])
    }
    
    result.push(arr[i])
  }
  return result
}
