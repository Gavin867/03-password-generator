// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of lowercase letters

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array list of UPPERCASE letters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array list of special characters

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ",", ".", "?", ";", ":"]

// Array of numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(lowercase, uppercase, special, numbers)

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
