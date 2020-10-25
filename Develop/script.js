// // Assignment Code
var generateBtn = document.querySelector("#generate");

//Define a database of characters to use in the password
var passwordCharacters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ",", ".", "?", ";", ":", "~", ";", "/", "`", "'"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
}

//Click the function button
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
    var selectedCharacter = characterPool[Math.floor(Math.random() * characterPool.length)];
    password += selectedCharacter;
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