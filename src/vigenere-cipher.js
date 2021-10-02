import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(word, keyword) {
    if (word === undefined || keyword === undefined)
      throw new NotImplementedError("Incorrect arguments!");

    let result = "";
    word = word.toUpperCase();
    for (let i = 0, j = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (this.isLetter(c)) {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + keyword.toUpperCase().charCodeAt(j) - 2 * 65) % 26) + 65
        );
      } else {
        result += c;
      }
      if (c === ' ') continue
      j = ++j % keyword.length;
    }

    if (this.type === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
  decrypt(word, keyword) {
    if (word === undefined || keyword === undefined)
      throw new NotImplementedError("Incorrect arguments!");

    let result = "";
    word = word.toUpperCase();
    for (let i = 0, j = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (this.isLetter(c)) {
        result += String.fromCharCode(
          90 -
            ((25 - (c.charCodeAt(0) - keyword.toUpperCase().charCodeAt(j))) %
              26)
        );
      } else {
        result += c;
      }
      if (c === ' ') continue
      j = ++j % keyword.length;
    }

    if (this.type === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
  isLetter(str) {
    return str.length === 1 && str.match(/[A-Z]/i)
  }
}
