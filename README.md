# Password Generator

## Project Goals

* Generate random password using user selected criteria
    * User selects password length
        * Minimum length 8 characters
        * Maximum length 128 characters
        * User alerted and function is terminated if length criteria not met
    * User selects character array values
        * Lowercase Letters
        * Uppercase Letters
        * Special Characters
        * Numbers
        * User alerted and function is terminated if no values are selected
    * Display the randomly selected characters on the screen

## Project Location

* [GitHub Repo](https://github.com/Gavin867/password-generator)
* [Published Site](https://gavin867.github.io/password-generator/)

## Lessons Learned

#### Every Structure Starts with a Framework

* The concept of 'psuedo code' was introduced to us in this assignment.
* 'Psuedo coding', as the the verb form goes, is the act of create a commented outline of the code that you intend to right.
* This outline identifies and breaks down the the actions which need to be taken by the program to create the desired endstate.
* The psuedocode comments also help clarify the purpose of each subsequent line of code.
* The comments are the green lines of text beginning with "//"

[image]

#### String Value vs. Actual Numbers

* One of the important aspects which this project drove home is a lesson in data types. 
* Namely that there is a major difference between data that is meant to be soley text or represntational, like strings, and data which is meant to have values which contribute directly to the function of what's under the hood of the application. 
* Where this comes into play most obviosly is the instance where the user is prompted for a character length in the passwordLength promp on line 19 of script.js.  
* In the depiction we see below, there is a 'parseInt' function wrapping the prompt which allows the function to convert a string input into a number value.
* This is important becase the number value associated with password length comes into play in our for loop on line 70, where it is used to determine the amount of iterations our loop runs to select password characters.

[image of pareseInt on line 19]

[image of for loop in line 70]

#### DOPE your Scope 

* Long range target shooting references aside, scope is a very important concept when it comes to building javascript functions.
* What I mean by the term 'scope' is the phenomena of variables only existing withing the layer of code that they are writtend in.
    * For example: the 'characterPool' variable on line 16 was inaccessible to the concat 'if' statements (needed to add sring values to) initially because it was originally placed in the 'passwordCharacters' object outside of the  'generatePassword' function.

[image of lines 1 through 90 with brackets]

#### Filling a Blank Array

* In order to create a maleable array, it must be blank. 
* What I am referring to specifically is the 

[image]

#### Returning Index Values vs. Useful Information

## Final Product

I am happy with the final product as I was able to accomplish all of the required criteria

[image]