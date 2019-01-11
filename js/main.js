/*
*       Roman numeral converter.
* 
*       Accepts roman (as string) or decimal (as string or number) numbers, 
*       returns converted as string.
*/

//const inputhBtn = document.getElementById("inputBtn");
const inputField = document.getElementById("inputField");
const outputDiv = document.getElementById("output");


inputBtn.addEventListener("click", function (e) {

  if (e.preventDefault) {
    e.preventDefault(); // prevent page from reloading... do I need this? hmmm
  }

  if (inputField.reportValidity()) {

    let input = document.getElementById("inputField").value;
    outputDiv.innerHTML = roman(input);

  } 
  
});


const table = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function roman(input) {

  let output = '';

  if (typeof input !== 'string') {
    input = input.toString();
  }

  const roman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gim;
  const decimal = /^\d+$/gm;

  if (input.match(roman)) {
    output = convertFromRoman(input);
  } else if (input.match(decimal)) {
    output = convertToRoman(input);
  }
  else {
    output = 'error: no match';
  }

  return output;

}

function convertFromRoman(romanMixCase) {

  let converted = 0;

  let roman = romanMixCase.toUpperCase();

  for (let i = 0; i < table.length; i++) {
    while (roman.indexOf(table[i][1]) === 0) {
      // sjekk første bokstav i roman string
      converted += table[i][0];
      // legg til i converted
      roman = roman.replace(table[i][1], '');
      // fjern første romertall
    }
  }

  converted = converted.toString();

  return converted;
}

function convertToRoman(num) {

  let converted = '';

  for (let i = 0; i < table.length; i++) {

    while (num % table[i][0] < num) {
      converted += table[i][1];
      num -= table[i][0];
    }
  }
  return converted;
}
