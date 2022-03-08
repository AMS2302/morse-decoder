const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

  function createArray(string) {
    let cutArray = [];
    let array = string.split('');
    for (let i = 0; i < array.length; i = i + 10) {
      let items = array.slice(i, i + 10);
      cutArray.push(items);
    }
    return cutArray;
  }

  function showLetter(array) {
    if (array[0] === '*') {
      return ' ';
    } else {
      let number = +array.join('');
      let string = String(number);
      let arr = string.split('');
      let newArr = [];
      for (let i = 0; i < arr.length; i = i + 2) {
        +arr[i] + +arr[i + 1] === 1 ? newArr.push('.') : newArr.push('-');
      }
      return MORSE_TABLE[newArr.join('')];
    }
  }

  let array = createArray(expr);

  let res = array.map(element => showLetter(element));

  return res.join('')
}

module.exports = {
  decode
}
