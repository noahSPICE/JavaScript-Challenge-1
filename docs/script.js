// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = lowerCase.toUpperCase();
let number = "0123456789";
let specials = "!%^&*-+=~"
let selections = "";
let pwdLength = 0;
let useLower = false;
let useUpper = false;
let useNumber = false
let useSpecial = false;

// Write password to the #password input
function showQuestions() {
  pwdLength = 0;
  useLower = false;
  useUpper = false;
  useNumber = false
  useSpecial = false;
  if (confirm("Do you want to use lowercase? If so, press 'OK'. If not, press 'Cancel'")) {
    useLower = true;
  } else {
    useLower = false;
  }
  if (confirm("Do you want to use uppercase? If so, press 'OK'. If not, press 'Cancel'")) {
    useUpper = true;
  } else {
    useUpper = false;
  }
  if (confirm("Do you want to use numbers? If so, press 'OK'. If not, press 'Cancel'")) {
    useNumber = true;
  } else {
    useNumber = false;
  }
  if (confirm("Do you want to use special characters? If so, press 'OK'. If not, press 'Cancel'")) {
    useSpecial = true;
  } else {
    useSpecial = false;
  }

  while (pwdLength == null || pwdLength == "" || typeof pwdLength !== 'number' || isNaN(pwdLength) || pwdLength > 124) {
    pwdLength = Number(prompt("Please enter your password length. Must be a minimum of 8, no more than 124:", "8"));
  }

  if (useLower === false && useUpper === false && useNumber === false && useSpecial === false) {
   alert("Please select at least one character type!"); 
  }

  writePassword();
}



function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let genPass = "";
  if (useLower === true) {
    selections = selections.concat(lowerCase);
  }
  if (useUpper === true) {
    selections = selections.concat(upperCase);
  }
  if (useNumber === true) {
    selections = selections.concat(number);
  }
  if (useSpecial === true) {
    selections = selections.concat(specials);
  }
  for (i = 0; i < pwdLength; i++) {
    genPass = genPass.concat(getRandomSymbol(selections));
  }
  return genPass
}

function getRandomSymbol(symbols) {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//generateBtn.addEventListener("click", showQuestions());
