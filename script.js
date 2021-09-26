/*GIVEN I need a new, secure password
WHEN I click the button to generate a password - done
THEN I am presented with a series of prompts for password criteria- done
WHEN prompted for password criteria - sort of done
THEN I select which criteria to include in the password -sort of done
WHEN prompted for the length of the password -done
THEN I choose a length of at least 8 characters and no more than 128 characters - done
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters -done 
WHEN I answer each prompt -done
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwd =[];

var allLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(allLower);

var allUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(allUpper);

var allSpecialCharacters = ['!', '@', '#', '%', '$'];
console.log(allSpecialCharacters);

var allNumeric = [0,1,2,3,4,5,6,7,8,9];
console.log(allNumeric);



// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    var userChoiceLength= prompt('Choose a length of at least 8 characters and no more than 128 characters');
    console.log('This is the user ', userChoiceLength)
    if (!userChoiceLength){
        return;
    }
    if(userChoiceLength < 8 || userChoiceLength  > 128){
        alert("You must enter a length 8 - 128");
        return;
    }

    var userChoiceUpper = confirm('Would you like upper case letters? Yes or No');
    console.log('This is the user ', userChoiceUpper);
      if(userChoiceUpper){
       pwd = pwd.concat(userChoiceUpper);

      }
    var userChoiceLower = confirm('Would you like lower case letters? Yes or No ');
    console.log('This is the user ', userChoiceLower);
      if(userChoiceLower){
          pwd = pwd.concat(userChoiceLower);

      }
    var userChoiceNumeric = confirm('Would you like any numbers? Yes or No ');
    console.log('This is the user ', userChoiceNumeric);
      if(userChoiceNumeric) {
          pwd = pwd.concat(userChoiceNumeric);
      }
    var userChoiceSpecialCharacters = confirm('Would you like any special characters? Yes or No ');
    console.log('This is the user ', userChoiceSpecialCharacters);
      if(userChoiceSpecialCharacters) {
          pwd = pwd.concat(userChoiceSpecialCharacters);
      } else if (!userChoiceUpper && !userChoiceLower && !userChoiceNumeric && !userChoiceSpecialCharacters) {
          pwd = "Abracadabra!".split('');
       

      }
      var finalPassword = [];

      for(var i = 0; i < length; i++) {
          var generated= Math.floor(Math.random()* pwd.length);
          finalPassword.push(pwd[generated]);
    
      }

      alert('See your password below');
      return finalPassword.join('');    
      
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





