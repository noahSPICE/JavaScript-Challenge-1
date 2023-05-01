// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = lowerCase.toUpperCase();
let number = "0123456789";
let specials = "!%^&*-+=~"
let selections = "";
let pwdLength = 10;
let useLower = true;
let useUpper = false;
let useNumber = true;
let useSpecial = true;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(generatePassword());

function generatePassword() {
  let genPass = "";
  if(useLower === true) {
    selections=selections.concat(lowerCase);
  }
  if (useUpper === true) {
    selections=selections.concat(upperCase);
  }
  if (useNumber === true) {
    selections=selections.concat(number);
  }
  if (useSpecial === true) {
    selections=selections.concat(specials);
  }
  console.log(selections);

  for (i = 0; i < pwdLength; i++) {
    genPass.concat(getRandomSymbol2(selections));
  }

  return genPass
}

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLowercase());

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(getRandomUppercase());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = "!%^&*-+=~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

function getRandomSymbol2(symbols) {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomLowercase2() {
  return getRandomSymbol2("abcdefghijklmnopqrstuvwxyz");
}
console.log(getRandomLowercase2());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
