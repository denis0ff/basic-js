import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let strin = str;
  let repeatTimes = 0;
  repeatTimes = options.repeatTimes;
  let separator = "+";
  if (options.separator !== undefined) separator = options.separator;
  let addition = "";
  if (options.addition !== undefined) addition = options.addition;
  let additionRepeatTimes = 0;
  additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = "|";
  if (options.additionSeparator !== undefined)
    additionSeparator = options.additionSeparator;

  let fullAddition = "";
  let fullStr = "";
  debugger;
  for (let i = 1; i < additionRepeatTimes; i++) {
    debugger;
    fullAddition += `${addition}${additionSeparator}`;
  }
  fullAddition += `${addition}`;

  for (let i = 1; i < repeatTimes; i++) {
    debugger;
    fullStr += `${strin}${fullAddition}${separator}`;
  }
  fullStr += `${strin}${fullAddition}`;

  return fullStr;
}
