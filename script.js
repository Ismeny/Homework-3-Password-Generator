
// Assignment Code
var generateBtn = document.querySelector("#generate");
//global variables
var pwd =[];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'x', 't', 'u', 'v','w', 'x', 'y', 'z'];


var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var symb = ['!', '@', '#', '%', '$'];


var number = [0,1,2,3,4,5,6,7,8,9];




// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");

    //ask user to choose password length and if they cancel
    var length= prompt('Choose a length of at least 8 characters and no more than 128 characters');
    console.log('This is the user ', length)
    if (!length){
        return;
    }
    // password length must be between 8-128
    if(length < 8 || length  > 128){
        alert('You must enter a length 8 - 128');
        return;
    }
//user confirms what characters will be included in password 
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
      } else if (!upperCase && !lowerCase && !number && !symb) {
          pwd = 'Abracadabra!'.split('');
       

      }
      //stores generated password
      var finalPassword = [];

      for(var i = 0; i < length; i++) {
          finalPassword.push(pwd[generated]);
    
      }
      //alerts that password has been generated
      alert('See your password below');
       passwordText.value = finalPassword.join('');
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





