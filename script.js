

var characterLength;

var lowercaseValue; 
  
var symbolValue;  
  
var numericValue;

var uppercaseValue;


generate.addEventListener("click", function() {
  characterLength = prompt('Please choose a password between 8 and 128 characters. ');
  if (Number(characterLength) < 8 || Number(characterLength) > 128) {
    alert('Please choose a password between 8 and 128 characters');
    
    return;
  }
  if (isNaN(characterLength)) {
    alert('This is not a number!');
    
    return;
  }
  uppercaseValue = confirm('Would you like upper case character in your password? ');
  lowercaseValue = confirm('Would you like lower case character in your password? ');
  symbolValue = confirm('Would you like a symbol character in your password? ');
  numericValue = confirm('Would you like a numeric character in your password? ');
})

function generatePassword() {
  var numbers = '0123456789';
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*()_-+=[]{}:;"';
  var chars = '';
  
  if (uppercaseValue) {
    chars = chars + letters.toUpperCase()
  }

  if (lowercaseValue) {
    chars = chars + letters.toLowerCase()
    console.log(chars)
  } 

  if (numericValue) {
    chars = chars + numbers
    console.log(chars)
  }

  if (symbolValue) {
    chars = chars + specialCharacters
    console.log(chars)
  }


  let passwordLength = Number(characterLength);
  let password ='';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()
    * chars.length);
    console.log(randomNumber);

    password += chars.substring(randomNumber,
    randomNumber + 1);
    }
   
    return password;
    

  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  

  passwordText.value = password;

  
}

generate.addEventListener("click", writePassword);
