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
  var useLowercase = confirm('Would you like lowercase letters?');
  var useUppercase = confirm('Would you like uppercase letters?');
  var useNumbers = confirm('Would you like to use numbers?');
  var useSpecial = confirm('Would you like to use special characters?');


  var passwordChars='';
  if(useLowercase){passwordChars += lowercase;
  }
  if (useUppercase){passwordChars += uppercase;
  }
  if (useNumbers){passwordChars += numbers;
  }
  if (useSpecial){passwordChars += special;
  }

  var password = '';
  for (var i =0; i<passwordLength; i++){
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

