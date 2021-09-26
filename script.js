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

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'x', 't', 'u', 'v','w', 'x', 'y', 'z'];


var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var symb = ['!', '@', '#', '%', '$'];


var number = [0,1,2,3,4,5,6,7,8,9];




// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");


    var length= prompt('Choose a length of at least 8 characters and no more than 128 characters');
    console.log('This is the user ', length)
    if (!length){
        return;
    }
    if(length < 8 || length  > 128){
        alert("You must enter a length 8 - 128");
        return;
    }

    var userChoiceUpper = confirm('Would you like upper case letters? Yes or No');
    console.log('This is the user ', userChoiceUpper);
      if(userChoiceUpper){
       pwd = pwd.concat(upperCase);

      }
    var userChoiceLower = confirm('Would you like lower case letters? Yes or No ');
    console.log('This is the user ', userChoiceLower);
      if(userChoiceLower){
          pwd = pwd.concat(lowerCase);

      }
    var userChoiceNumeric = confirm('Would you like any numbers? Yes or No ');
    console.log('This is the user ', userChoiceNumeric);
      if(userChoiceNumeric) {
          pwd = pwd.concat(number);
      }
    var userChoiceSymb = confirm('Would you like any special characters? Yes or No ');
    console.log('This is the user ', userChoiceSymb);
      if(userChoiceSymb) {
          pwd = pwd.concat(symb);
      } else if (!userChoiceUpper && !userChoiceLower && !userChoiceNumeric && !userChoiceSymb) {
          pwd = "Abracadabra!".split('');
       

      }
      var finalPassword = [];

      for(var i = 0; i < length; i++) {
          var generated= Math.floor(Math.random()* pwd.length);
          finalPassword.push(pwd[generated]);
    
      }

      alert('See your password below');
       passwordText.value = finalPassword.join("");
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





