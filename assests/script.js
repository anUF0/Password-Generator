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

const password = document.querySelector("#password");

//Promts
var chosenLength = window.prompt("How long do want the password to be? (8-128 characters, other inputs will be set to min/max)");
var uppercaseConfirm = window.prompt("Should it include uppercase letters? (Y/N?)");
var lowercaseConfirm = window.prompt("Should it include lowercase letter (Y/N?)");
var numConfirm = window.prompt("Should it include numbers? (Y/N?)");
var spCharaConfirm = window.prompt("Should it special characters? (Y/N?)");

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

//Prompt Checkers
var passLength = 0;{
  if(chosenLength <  8){passLength = 8}
else if(chosenLength > 128){
 chosenLength = 128
} else{
 passLength = chosenLength;
}
}

var uppercase = false; {if(uppercaseConfirm == 'y'){
  uppercase = true;
}
}

var lowercase = false;{
if(lowercaseConfirm == 'y'){
  lowercase= true;
}
}

var numbers = false;{
if(numConfirm == 'y'){
  numbers = true;
}}

var spChara = false;{
if(spCharaConfirm == 'y'){
  spChara = true;
}
}




//PasswordGenerator function
function generatePassword(uppercase, lowercase, numbers, spChara, passLength) {
       let tempPassword = '';
       let variationsCount = [uppercase, lowercase, numbers, spChara].passLength;

       for (let i = 0; i < passLength; i+= variationsCount){
          if(uppercase){
            tempPassword += getRandomUpper();
        }
        if(lowercase){
          tempPassword += getRandomLower();
      }  if(numbers){
        tempPassword += getRandomNum();
    }  if(spChara){
      tempPassword += getRandomSpChara();
  }
}

var password = tempPassword.slice(0, passLength);

return password;
}

generateBtn.addEventListener("click", generatePassword) 