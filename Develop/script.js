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
  for(numChar;8>numChar || 128<numChar;){
    numChar = window.prompt("Please enter a password length between 8 and 128 characters");
  }
var inclLowercase = false;
var inclUppercase = false;
var inclNum = false;
var inclSpChar = false;
for(;!inclLowercase && !inclUppercase && !inclNum && !inclSpChar;){
window.alert("Please select at least one of the following character options for your password: capital letters, lowercase letters, numbers, and/or special characters");
inclLowercase = window.confirm("Do you wish to include lowercase letters? Press 'OK' to confirm, or 'cancel' to deny");
inclUppercase = window.confirm("Do you wish to include uppercase letters? Press 'OK' to confirm, or 'cancel' to deny");
inclNum = window.confirm("Do you wish to include numbers? Press 'OK' to confirm, or 'cancel' to deny");
inclSpChar = window.confirm("Do you wish to include special characters? Press 'OK' to confirm, or 'cancel' to deny");
//generate random password, ensuring 1 of each character type is selected
var interim = [];
var passChar;
if(inclLowercase){
  passChar = interim.concat(alphaLow);
  interim = passChar;
}if(inclUppercase){
  passChar = interim.concat(alphaUp);
  interim = passChar;
}if(inclNum){
  passChar = interim.concat(num);
  interim = passChar;
}if(inclSpChar){
  passChar = interim.concat(special);
}
console.log(passChar);
return "awesome";
}

//password matches all selected prompts
//password is displayed to the page
}