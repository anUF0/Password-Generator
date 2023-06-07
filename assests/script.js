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
//TODO Make them do something
var passlength = window.prompt("How long do want the password to be? (8-128 characters)");
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

//Listener and Promt Checker
//generateBtn.addEventListener("click", () => {
//  var length = passlength.value;
//  var upper = uppercaseConfirm;
//  var lower = lowercaseConfirm;
//  var numbers = numConfirm;
//  var spChara = spCharaConfirm;
//  results.value =generatePassword(upper, lower, numbers, spChara, length)
//});

//PasswordGenerator function
function generatePassword() {
       var tempPassword = "";
       var y = true;

       for (let i = 0; i < length; i++){
          if(uppercaseConfirm = y){
            tempPassword += getRandomUpper
        }
        if(lowercaseConfirm = y){
          tempPassword += getRandomLower
      }  if(numConfirm = y){
        tempPassword += getRandomNum
    }  if(spCharaConfirm = y){
      tempPassword += getRandomSpChara
  }
}

var password = tempPassword.slice(0, passlength);

return password;

}

console.log(password)


