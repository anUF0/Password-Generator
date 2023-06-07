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
var passlength = window.prompt("How long do want the password to be? (8-128 characters)")
var uppercaseConfirm = window.prompt("Should it include uppercase letters? (Y/N?)")
var lowercaseCofirm = window.prompt("Should it include lowercase letter (Y/N?)")
var numConfirm = window.prompt("Should it include numbers? (Y/N?)")
var spCharaConfirm = window.prompt("Should it special characters? (Y/N?)")

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  return  specialCharacters[Math.floor(Math.random() *  specialCharacters.length)];
}

console.log(getRandomSymbol())



//PasswordGenerator
function generatePassword() {
        charset = numericCharacters,
        password = "";
    for (var i = 0, n = charset.length; i < passlength; i) {
        password += charset.substring(Math.floor(Math.random() * n));
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
