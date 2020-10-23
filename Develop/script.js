// // Assignment Code
var generateBtn = document.querySelector("#generate");

//define a database of characters to use in the password
var pwCharacters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ",", ".", "?", ";", ":"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  totalChar: [],
}

console.log(pwCharacters);

//click the function button
function generatePassword() {
  var useLowercase = confirm("Would you like your password to include lowercase characters?");
  var useUppercase = confirm("Would you like your password to include uppercase characters?");
  var useSpecial = confirm("Would you like your password to include numbers?");
  var useNumbers = confirm("Would you like your password to include special characters?");
  var totalCharUsed = prompt("Please specify a password length from 8 to 128 characters.");
//If the user does not select a valid lenght input they should be prompted to do so
  if(totalCharUsed >= 129 || totalCharUsed <= 7) 
    alert("Please select");


  alert("You have selected Lowercase:" + useLowercase + "Uppercase:" + useUppercase + "Special Characters:" + useSpecial + "Length:" + totalCharUsed);

  // if( !( totalCharUsed >= 8 || totalCharUsed <= 128)) {
  //   alert("Password length must be from 8 to 128 characters in length.");
  // }


}

// console.log(generatePassword)

//   // Password length
//   const passwordLength = prompt("asdfasdf")

//   //IF NOT ( password >= 8 || password length <=128 )
//   if( !(passwordLEngth >= 8 || passwordLength <= 128)) {
//     //Then Alert to the user that they need to provide a correct length
//     alert("Please select option within 8 and 128 characters.")
//     //and exit function
//     return;
//   }

//   //DECLARE a new list of 'charactersUsed'
//   var charactersUsed = [];

//   //DECLARE a new password string
//   var password = ""

//   //CONFIRM if the password generator 'isUsingNumbers'
//   // THEN push uppercase letters in characterUsed

//   //IF 'isUsingNumbers"
//   //THEN
//   // AND APPEND on number from the numbers list

//   //CONFIRM if the password generator 'isUsingLowercase'
//   // THEN push uppercase letters in isUsingLowercase'
//   // AND APPEND

//   //CONFIRM if the password generator 'isUsingUppercase'
//   // THEN push uppercase letters in isUsingUppercase
//   // AND APPEND

//   //CONFIRM if the password generator 'isUsingSpecial'
//   // THEN push uppercase letters in 'isUsingSpecial'
//   // AND APPEND


//   //FOR i = 0; CONITNUE as long as i < passworthLength; i++;
//   for( var i =0; i < passwordLength; i== ) {

// }

// // Confirm use special characters

// //WHILE password.length < passwordLength
// while( password.length < passwordLength) {

//   //SELECT 'randCHaracter' a charcter from 'charactersUed"
//   //APEND 'randCharacter' to 'password' string
  
//   //RETURN password
//   return password;


// }

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// //ISSUE different weights to arrays need to garauntee 

// //could add all arrays to one as sub array gi