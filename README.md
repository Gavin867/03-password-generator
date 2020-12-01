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

![Page example](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/03-javascript-homework-demo.png)

## Project Location

* [GitHub Repo](https://github.com/Gavin867/03-password-generator)
* [Published Site](https://gavin867.github.io/03-password-generator/)

## Lessons Learned

#### Every Structure Starts with a Framework

* The concept of 'psuedo code' was introduced to us in this assignment.
* 'Psuedo coding', as the the verb form goes, is the act of create a commented outline of the code that you intend to right.
* This outline identifies and breaks down the the actions which need to be taken by the program to create the desired endstate.
* The psuedocode comments also help clarify the purpose of each subsequent line of code.
* The comments are the green lines of text beginning with "//".

![Psuedo Code Examples](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/psuedo-code.jpg)

#### Data Types - String Value vs. Actual Numbers

* One of the important aspects which this project drove home is a lesson in data types. 
* Namely that there is a major difference between data that is meant to be soley text or represntational, like strings, and data which is meant to have values which contribute directly to the function of what's under the hood of the application. 
* Where this comes into play most obviosly is the instance where the user is prompted for a character length in the passwordLength promp on line 19 of script.js.  
* In the depiction we see below, there is a 'parseInt' function wrapping the prompt which allows the function to convert a string input into a number value.
* This is important becase the number value associated with password length comes into play in our for loop on line 70, where it is used to determine the amount of iterations our loop runs to select password characters.

![parseInt](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/line19-parseInt.jpg)

![for loop](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/line70-forloop.jpg)

#### DOPE your Scope 

* Long range target shooting references aside, scope is a very important concept when it comes to building javascript functions.
* What I mean by the term 'scope' is the phenomena of variables only existing withing the layer of code that they are writtend in.
* For example: the 'characterPool' variable on line 16 was inaccessible to the concat 'if' statements (needed to add sring values to) initially because it was originally placed in the 'passwordCharacters' object outside of the  'generatePassword' function.

[image of lines 1 through 90 with brackets]

#### Filling a Blank Array

* In order to create a maleable array, it must be blank. 
* What I am referring to specifically are the 'characterPool' and 'password' variables containged within the 'generate password function.
* The use of [] brackets enables these arrays to be filled with values provided by other subfunctions.
* The introduction of data to these blank arrays is achieved through the use of 'concat' and '+=" operators.

![characterPool](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/line16-characterPool.jpg)

![password](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/line67-password.jpg)

#### Returning Index Values vs. Useful Information

* One of the initital problems I ran into with my four loop is that it returned only numeric values as the end result.
* I understood almost right away that what I was looking at was a return of index values from the 'characterPool' array that had been built from our user inputs.
* The solution to this issue was to wrap the 'Math.floor/Math.random' functions of the loop with the array value 'characterPool'. 

![characterPool wrap](https://github.com/Gavin867/03-password-generator/blob/main/Assets/Images/line70-characterPool-wrap.jpg)

## Parting Thoughts

Throughout this process I made it a personal goal to limit the amount of time I spent looking at the work of my fellow dev classmates. I wanted to try and come up with a solved solution on my own that made sense to me and am very cautious about ensurinng my academic integrity cannot be questioned. Ultimately I did wind up crossreferencing some classmate examples with others I had seen on line. This ultimately helped me understand the 'for' loop components better and what I came up with is an almagamation of different elements of all those examples, placed together in such a way which fit best with my though processes. One major take away from this process is how diverse the pool of possible solutions is to a problem like the Password Generator. It will certaininly be fun to spend more time going through the shard work of others to see how a different mind approaches the code. In so doing, expand my understaing of javascript.