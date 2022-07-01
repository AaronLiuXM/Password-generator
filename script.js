// Assignment code here
var generateBtn = document.querySelector("#generate");
var getRandomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getRandomLower = "abcdefghijklmnopqrstuvwxyz";
var getRandomNumber = "0123456789";
var getRandomSymbol = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";




var getLength;
var pwLength;

var checkUpperCase;
var checkLowerCase;
var checkNumber;
var checkSymbol;


// Alert section

// Length alert

function getLength() {
  pwLength = prompt("Choose how many characters you'd like your password to be in between 8-128 characters: ");

  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be in between 8-128 characters");
    getLength();

  }else if (isNaN(pwLength)) {
    alert("Password length must be in between 8-128 characters");
    getLength();

  }else {
    return pwLength;
  }
}

// Uppercase alert

function upperAlert() {
  checkUpperCase = confirm("Do you want to include uppercase character in your password? type Yes or No.");
  return checkUpperCase;
}

// Lowercase alert

function lowerAlert() {
  checkLowerCase = confirm("Do you want to include lowercase character in your password? type Yes or No.");
  return checkLowerCase;
}

// Number alert

function numberAlert() {
  checkNumber = confirm("Do you want to include number in your password? type Yes or No.");
  return checkNumber;
}

// Symbol alert

function symbolAlert() {
  checkSymbol = confirm("Do you want to include symbol in your password? type Yes or No.");
  return checkNumber;
}

// Ramdomize function
// Uppercase random fun

function generatePassword() {
  getLength();
  upperAlert();
  lowerAlert();
  numberAlert();
  symbolAlert();

  var passwordResult = "";

  if (checkUpperCase && checkLowerCase && checkNumber && checkSymbol === true) {
    randomPassword = getRandomUpper + getRandomLower + getRandomNumber + getRandomSymbol;

  }else if (checkLowerCase && checkNumber && checkSymbol === true) {
    randomPassword = getRandomLower + getRandomNumber + getRandomSymbol;

  }else if (checkUpperCase && checkNumber && checkSymbol === true) {
    randomPassword = getRandomUpper + getRandomNumber + getRandomSymbol;

  }else if (checkUpperCase && checkLowerCase && checkSymbol === true) {
    randomPassword = getRandomUpper + getRandomLower + getRandomSymbol;

  }else if (checkUpperCase && checkLowerCase && checkNumber === true) {
    randomPassword = getRandomUpper + getRandomLower + getRandomNumber;

  }else if (checkUpperCase && checkLowerCase === true) {
    randomPassword = getRandomUpper + getRandomLower;

  }else if (checkUpperCase && checkNumber=== true) {
    randomPassword = getRandomUpper + getRandomNumber;

  }else if (checkUpperCase && checkSymbol === true) {
    randomPassword = getRandomUpper + getRandomSymbol;

  }else if (checkLowerCase && checkNumber === true) {
    randomPassword = getRandomLower + getRandomNumber ;

  }else if (checkLowerCase && checkSymbol === true) {
    randomPassword = getRandomLower + getRandomSymbol;

  }else if (checkNumber && checkSymbol === true) {
    randomPassword = getRandomNumber + getRandomSymbol;

  }else if (checkUpperCase === true) {
    randomPassword = getRandomUpper;

  }else if (checkLowerCase === true) {
    randomPassword = getRandomLower;

  }else if (checkNumber === true) {
    randomPassword = getRandomNumber;

  }else if (checkSymbol === true) {
    randomPassword = getRandomSymbol;

  }else {
    alert("Please select at least one option!")
    return generatePassword();
  }

    for (let i = 0; i < pwLength; i++){
    passwordResult += randomPassword.charAt(Math.floor(Math.random()* randomPassword.length));
    }
    return passwordResult;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

