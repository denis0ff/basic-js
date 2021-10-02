import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  if (matrix.length < 3) {
    result.splice(2, 1);
    return result;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k]) {
        result[i][k] = 1;
      } else {
        if (i + 1 < matrix.length) {
          if (matrix[i + 1][k]) result[i][k]++;
        }
        if (i - 1 >= 0) {
          if (matrix[i - 1][k]) result[i][k]++;
        }
        if (k + 1 < matrix[0].length) {
          if (matrix[i][k + 1]) result[i][k]++;
        }
        if (k - 1 >= 0) {
          if (matrix[i][k - 1]) result[i][k]++;
        }
        if (!result[i][k]) result[i][k]++;
      }
    }
  }
  return result;
}
