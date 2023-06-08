// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  //'\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Promts
var passLength = 0;
var chosenLength = window.prompt("How long do want the password to be? (8-128 characters, other inputs will be set to min/max)");
if(chosenLength <  8){passLength = 8}
else if(chosenLength > 128){
 chosenLength = 128
} else{
 passLength = chosenLength;
}

//TODO makes these no longer case sensative
var uppercase = false;
var uppercaseConfirm = window.prompt("Should it include uppercase letters? (Y/N?)");
if(uppercaseConfirm == 'y')
{uppercase = true;}

var lowercase = false;
var lowercaseConfirm = window.prompt("Should it include lowercase letter (Y/N?)");
if(lowercaseConfirm == 'y')
{lowercase = true;}

var numbers = false;
var numConfirm = window.prompt("Should it include numbers? (Y/N?)");
if(numConfirm == 'y'){
  numbers = true;
};

var spChara = false;
var spCharaConfirm = window.prompt("Should it special characters? (Y/N?)");
if(spCharaConfirm == 'y'){
  spChara = true;
};

//Random Generation Funcitons
function getRandomUpper() {
  return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
}
function getRandomLower() {
  return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
}
function getRandomNum() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}
function getRandomSpChara() {
  return specialCharacters[Math.floor(Math.random() *  specialCharacters.length)];
}

generateBtn.addEventListener("click", () => {
password.value = writePassword(uppercase, lowercase, numbers, spChara, passLength)
});



//PasswordGenerator
function writePassword(uppercase, lowercase, numbers, spChara, passLength) {
       let tempPassword = '';
       let variationsCount = [uppercase, lowercase, numbers, spChara].passlength;

       for (let i = 0; i < passLength; i+= variationsCount){
          if(uppercase=== true){
            tempPassword += getRandomUpper();
        }
        if(lowercase=== true){
          tempPassword += getRandomLower();
      }  if(numbers=== true){
        tempPassword += getRandomNum();
    }  if(spChara=== true){
      tempPassword += getRandomSpChara();
  }
}
var password = tempPassword.slice(0, passLength);

return password;
}
