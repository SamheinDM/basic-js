const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (normal) {
    if (!normal) { // normal
      this.normalReverse = false;
    }
  }

  normalReverse = true;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                                                            // attack at dawn!   
  encrypt(message, key) {                                                   //-AEIHQX ST DHKA!O - act     15     alphonse
    if (message == undefined || key == undefined) {                         //+AEIHQX SX DLLU! - exp     12
      throw new Error('Error');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let maxlength = Math.max(message.length, key.length);
    let result = '';
    let count = 0;

    for(let i = 0; i < maxlength; i++){                                                                                 // 8
      let actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );    // 19
      let actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];                                               // 'A'
      if (actMessSymbIndex < 0) {
        result += message[ ( (i >= message.length) ? i % message.length : i ) ];
        if (!message[i + 1]) {
          break;
        }
        i++;                                                                                                            // 7
        actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );      // 1
        count++;                                                                                                        // 1
        i -= count;                                                                                                     // 6
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];                                                 // 'S'
        i += count;                                                                                                     // 7
      } else if (count > 0) {
        i -= count;                                                                                                    
        actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];                                               
        i += count; 
      }
      let ki = this.alphabet.indexOf( actKeySymb );                                                                     // 0
      let char = this.alphabet[ ( ( ( this.alphabet.length + ( actMessSymbIndex + ki ) ) % this.alphabet.length ) ) ];  // 14
      result += char;                 // 26                       19                              26                    
    }
    if (!this.normalReverse) {
      result.split('').reverse().join('');
    }

    return result.toUpperCase();
  }    
  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let maxlength = Math.max(message.length, key.length);
    let result = '';
    let counter = 0;

    for(let i = 0; i < maxlength; i++){
      let actMessSymbIndex = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );
      if (actMessSymbIndex < 0) {
        result += message[ ( (i >= message.length) ? i % message.length : i ) ];
        i++
      } else {
        actMessSymbIndex = this.alphabet.indexOf( message[ ( (counter >= message.length) ? counter % message.length : counter ) ] );
        let actKeySymb = key[ ( (counter >= key.length) ? counter % key.length : counter ) ];
        let ki = (this.alphabet.indexOf( actKeySymb )) * (-1);
        let char = this.alphabet[ ( ( ( this.alphabet.length + ( actMessSymbIndex + ki ) ) % this.alphabet.length ) ) ];
        result += char;
        counter++;
      }
    }
    if (!this.normalReverse) {
      result.split('').reverse().join('');
    }

    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;


// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		//Строка алфавита
// var message = "ATTACKATDAWN";						//Сообщение
// var key = "LEMON";							//Ключ

// function Vizhener( message, key, typeOfOperation ){//(encrypt/decrypt) for "Gronsfeld" + "Vizhener" + "Beaufort" + "Shifted Atbash"
//m - сообщение или шифротекст (может быть и ключ, если шифр Бофора),
//key - ключ (или сообщение/шифротекст, если шифр Бофора),
//typeOfOperation - режим:
//	Шифрование: 	"encrypt" (по умолчанию),
//	Дешифрование: 	"decrypt" (typeOfOperation === 'decrypt'),
//	Шифрование-дешифрование по таблице сдвинутого атбаша: (typeOfOperation==='shifted_atbash')
//	Извлечение цифр из ключа шифра Гронсфельда: "gronsfeld" или "gronsfeld_encrypt", "gronsfeld decrypt".

// 	var maxlength = Math.max(m.length, key.length);
// 	var result = '';	//Пустой результат
// 	for(i=0; i<maxlength; i++){ 			//encrypt/decrypt
//Vizhener - encrypt/decrypt one forumula (encrypt - by default; decrypt - when (typeOfOperation === 'decrypt') )
// 		var actMessSymb = alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );	//подгон сообщения/шифротекста - к ключу (если меньше)
// 		var actKeySymb = key[ ( (i >= key.length) ? i % key.length : i ) ];
//подгон ключа к сообщению/шифротексту (если короткий)
// 		var ki = alphabet.indexOf( actKeySymb );                      // GRONSFELD (typeof typeOfOperation !== 'undefined' && typeOfOperation.indexOf('gronsfeld') !== -1) ? parseInt( actKeySymb ): xxx
//вычитание при дешифровании, либо сложение.
// 		ki = ( (typeof typeOfOperation !== 'undefined' && typeOfOperation.indexOf('decrypt') !== -1) ? (-ki) : ki );
// 		char = alphabet[ ( ( ( alphabet.length + ( actMessSymb + ki ) ) % alphabet.length ) ) ];				//символ по таблице Виженера.
// char = (typeOfOperation === 'shifted_atbash') ? alphabet[alphabet.length-1-alphabet.indexOf(char)] : char;	//Атбаш символа или символ.
// 		result += char;																//Добавить символ к результату.
// 	}
// 	return result; //вернуть строку результат
// }