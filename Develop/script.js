// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(){
  var passwordLength = parseInt(prompt('Enter password length(bewteen 8-128 characters):'));
  if(isNaN(passwordLength)|| passwordLength <8 || passwordLength >128){
    alert('Not a valid password length. Re-enter a number bewteen 8 & 128.');
    return'';
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

