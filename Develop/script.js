// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
//Clicking generate password leads to prompts of password requirements
generateBtn.addEventListener("click", writePassword);

//Establish variables with password characters
var alphaLow = "abcdefghijklmnopqrstuvwxyz".split("");
var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "0123456789".split("");
var special = "!#$%@^&*><?".split("");

function generatePassword() {
  //password requirements store answers in variables for passwords
var numChar =0;
//for loop ensures password character input is within range
  for(numChar;8>numChar || 128<numChar;){
    numChar = window.prompt("Please enter a password length between 8 and 128 characters");
  }
var inclLowercase = false;
var inclUppercase = false;
var inclNum = false;
var inclSpChar = false;
//for loop that leads to prompts regarding which character types user wants in password, ensures at least one is selected.
for(;!inclLowercase && !inclUppercase && !inclNum && !inclSpChar;){
window.alert("Please select at least one of the following character options for your password: lowercase letters, uppercase letters, numbers, and/or special characters");
inclLowercase = window.confirm("Do you wish to include lowercase letters? Press 'OK' to confirm, or 'cancel' to deny");
inclUppercase = window.confirm("Do you wish to include uppercase letters? Press 'OK' to confirm, or 'cancel' to deny");
inclNum = window.confirm("Do you wish to include numbers? Press 'OK' to confirm, or 'cancel' to deny");
inclSpChar = window.confirm("Do you wish to include special characters? Press 'OK' to confirm, or 'cancel' to deny");
}
//establish variables to hold array for possible password character, and for password array
var interim = [];
var passChar;
var i=0;
var pword;
var tempPass = "";
var index;

//if statements to evaluate if the character type was selected for password, add arra of characters to overall possible password
//array, as well as add one of the characters to final password array to ensure the character type makes it into password.
if(inclLowercase){
  passChar = interim.concat(alphaLow);
  interim = passChar;
  index = Math.floor(Math.random()*alphaLow.length);
  pword = alphaLow[index];
  tempPass = pword;
  i++;
}if(inclUppercase){
  passChar = interim.concat(alphaUp);
  interim = passChar;
  index = Math.floor(Math.random()*alphaUp.length);
  pword = tempPass.concat(alphaUp[index]);
  tempPass = pword;
  i++;
}if(inclNum){
  passChar = interim.concat(num);
  interim = passChar;
  index = Math.floor(Math.random()*num.length);
  pword = tempPass.concat(num[index]);
  tempPass = pword;
  i++;
}if(inclSpChar){
  passChar = interim.concat(special);
  index = Math.floor(Math.random()*special.length);
  pword = tempPass.concat(special[index]);
  tempPass = pword;
  i++;
}

//generate random password, starting at index location after initial unique elements selected
for(;i<numChar;i++){
  index = Math.floor(Math.random()*passChar.length);
  pword = tempPass.concat(passChar[index]);
  tempPass = pword;
}

return "Your new password is: " + pword;//returns password value within text string as output of function
}


