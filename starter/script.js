 // Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



//first message
alert("Hello! Let's get started to generate the password!");




function getPasswordOptions()  {

  ///set all the variables
  let upCase;  
  let lowCase; 
  let numbs;
  let spChar; 
  let preference = [];

  let passwordLength = prompt("Please select your password length in between 10 to 64 characters.");
  if (passwordLength < 9 || passwordLength > 65 || isNAN(passwordLength) ) {
    alert("Try again!");
  }


  else {
    if (confirm("Would you like special characters in your password?")){
      preference.push(spChar);
    }

    if (confirm("Would you like number in your password?")){
      preference.push(numbs);
    }

    if (confirm("Would you like lowercase characters in your password?")){
      preference.push(lowCase);
    }

    if (confirm("Would you like uppercase characters in your password?")){
      preference.push(upCase);
    }
  }
/////Using if statement for the users not selected any characters 
  if (preference.length===0){
    alert("Please select at least 1 type of characters! Try Again.")
  };
};
  

//// Use for loop and math floor math random to get the result
function getRandom(arr) {
  for (let i=0; i<passwordLength; i++) {
    let random = Math.floor(Math.random()*passwordLength);
    result += preference[ramdom];
  }

}

// Function to generate password with user input
////bring all arr to generate PW 
///string , loop  
function generatePassword() {
  let PW = [];

  if (spChar){
    PW.push(getRandom(spChar));
  }
  if (numbs){
    PW.push(getRandom(numbs));
  }
  if (lowCase){
    PW.push(getRandom(lowCase));
  }
  if (upCase){
    PW.push(getRandom(upCase));
  }
  for (let i=PW.length; i < passwordLength; i++) {
    PW.push(getRandom);
  }

  return"PW"; ///test

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);  
