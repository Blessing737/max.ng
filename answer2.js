function decodeMorse(arr){
  var __code = arr.split(' ')
  var morse_value = '';
    for(var count = 0; count < __code.length; count++){
        morse_value += MORSE_CODE[__code[count]];
      }
      return morse_value
    }
