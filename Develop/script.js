// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of lowercase letters

// Array list of UPPERCASE letters

// Array list of special characters


function generatePassword() {

  // Password length
  const passwordLength = prompt("asdfasdf")
  // Confirm use number

  // Corfirm use lowercase letters

  // Confirm use UPPERCASE letters
}


// Confirm use special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
