const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (normal) {
    if (normal === false) {
      this.normalReverse = false;
    }
  }

  normalReverse = true;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let count = 0;

    for(let i = 0; i < message.length; i++){
      let actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );
      let actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
      if (actMessSymbIndex < 0) {
        result += message[ ( (i >= message.length) ? i % message.length : i ) ];
        if (!message[i + 1]) {
          break;
        }
        i++;
        actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );
        count++;
        i -= count;
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
        i += count;
        if (this.alphabet.indexOf( message[ ( (i >= message.length) ? (i) % message.length : i ) ] ) < 0) {
          i--;
          continue;
        }
      } else if (count > 0) {
        i -= count;
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
        i += count; 
      }
      let ki = this.alphabet.indexOf( actKeySymb );
      let char = this.alphabet[ ( ( ( this.alphabet.length + ( actMessSymbIndex + ki ) ) % this.alphabet.length ) ) ];
      result += char;
    }
    if (this.normalReverse === false) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let count = 0;

    for(let i = 0; i < message.length; i++){
      let actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );
      let actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
      if (actMessSymbIndex < 0) {
        result += message[ ( (i >= message.length) ? i % message.length : i ) ];
        if (!message[i + 1]) {
          break;
        }
        i++;
        actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );
        count++;
        i -= count;
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
        i += count;
        if (this.alphabet.indexOf( message[ ( (i >= message.length) ? (i) % message.length : i ) ] ) < 0) {
          i--;
          continue;
        }
      } else if (count > 0) {
        i -= count;
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
        i += count; 
      }
      let ki = (this.alphabet.indexOf( actKeySymb )) * (-1);
      let char = this.alphabet[ ( ( ( this.alphabet.length + ( actMessSymbIndex + ki ) ) % this.alphabet.length ) ) ];
      result += char;
    }
    if (this.normalReverse === false) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;