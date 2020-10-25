// // Assignment Code
var generateBtn = document.querySelector("#generate");

//define a database of characters to use in the password
var passwordCharacters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ",", ".", "?", ";", ":", "~", ";", "/", "`", "'"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
}

//click the function button
function generatePassword() {

  //Create a variable will serve as the pool of characters the for loop will select characters from.
  var characterPool = [];

  //Ask the user how long the password will be. Utilize parsInt to ensure that string data is converted to number value.
  var passwordLength = parseInt(prompt("Please specify a password length (minimum 8 characters, maximum 128)."));

  //If the user does not select a valid lenght input they should be prompted to do so and sent bacl to length selection.
    if( !(passwordLength >= 8 && passwordLength <= 128)) {
      alert("Invalid entry. Password length must be a number equal to/greater than 8 and less than/equal to 128.");
      return;
    }
  
  //Ask the user if they would like to use lowercase letters.
  var useLowercase = confirm("If you would like your password to include lowercase letters, click 'okay'.");
  //If they are going to use lowercase letters then the concat function adds the lowercase are to the pool of characters to use.
    if(useLowercase === true) {
      characterPool = characterPool.concat(passwordCharacters.lowercase);
    }

  //Ask the user if they would like to use uppercase letters.
  var useUppercase = confirm("If you would like your password to include uppercase letters, click 'okay'.");
  //If they are going to use uppercase letters then the concat function adds the uppercase are to the pool of characters to use.
    if(useUppercase === true) {
      characterPool = characterPool.concat(passwordCharacters.uppercase);
    }

  //Ask the user if they would like to use special characters.
  var useNumbers = confirm("If you would like your password to include special characters, click 'okay'.");
  //If they are going to use special characters then the concat function adds the lowercase are to the pool of characters to use.  
    if(useNumbers === true) {
      characterPool = characterPool.concat(passwordCharacters.numbers);
    }

  //Ask the user if they would like to use numbers.
  var useSpecial = confirm("If you would like your password to include numbers, click 'okay'.");
  //If they are going to use numbers then the concat function adds the special are to the pool of characters to use.
    if(useSpecial === true) {
      characterPool = characterPool.concat(passwordCharacters.special);
    }

  //If the user has not selected any criteria for their password they are given an alert telling them they need and are returned to the start.
  if(useLowercase === false && useUppercase === false && useSpecial === false && useNumbers === false) {
    alert("Invalid criteria. You must select at least one character type.");
    return;
  }

  //After all criteria has been selected user is given a summary of their selections.
  alert("You have selected the following password criteria: Length-" + passwordLength + "; Lowercase-" + useLowercase + "; Uppercase-" + useUppercase + "; Special Characters-" + useSpecial + "; Numbers-" + useNumbers);

  //Now that we have our pool filled with characters satisfying the user selected criteria, we must created a 'for' loop to randomly select values from it
  
  //Before we can create our for loop, we must create an empty variable for our loop to add these values into
  var password = [];

  for (var i = 0; i <passwordLength; i++) {
    var randomPoolIndex = Math.floor(Math.random() * characterPool.length + 1);
    password += characterPool.charAt(randomPoolIndex);
  }

  return password;
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 // //If the user selects lowercase option, the lowcase array is added into the totalChar array
  

  // //If the user selects uppercase option, uppercase array is activated...
  // if (useUppercase === true) {

  // }

  // //If the user selects lowercase option, lowercase array is activated...
  // if (useSpecial === true) {

  // }

// if(totalCharUsed >= 129 || totalCharUsed <= 7 || totalCharUsed !== Number)

//CONCACT ENTIRE POOL AND LOOP 'X' TIMES

//DIVIDE CHARCTER LENGTH BY 4 AND RUN EACH LOOP THAT NUMBER OF TIMES

// console.log(generatePassword)

//   // Password length
//   const passwordLength = prompt("asdfasdf")

//   //IF NOT ( password >= 8 || password length <=128 )
//   if( !(passwordLength >= 8 || passwordLength <= 128)) {
// //     //Then Alert to the user that they need to provide a correct length
//     alert("Please select option within 8 and 128 characters.")
// //     //and exit function
//     return;
  // }

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


// //ISSUE different weights to arrays need to garauntee 

// //could add all arrays to one as sub array gi