// Assignment Code
var generateBtn = document.querySelector("#generate");

var keys = {
    length: prompt("How long do you want your password to be?");
    lowerCase: confirm("Would you like to have lower cases in this password?"),
    upperCase: confirm("Would you like to have upper cases in this password?"),
    numeric: confirm("Would you like to have numbers in this password?"),
    special: confirm("Would you like to have special characters in this password?")
};

var passwordText = document.querySelector("#password");
passwordText.value = password;

for (var i = 1; i <= keys.length; i++) {
    var password = [];
    if (keys.lowerCase === true) {
        password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        console.log(password);
    }
    if (keys.upperCase === true) {
        password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        console.log(password);
    }
    if (keys.numeric === true) {
        password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        console.log(password);
    }
    if (keys.special === true) {
        specialchar = "!@#$%&*?";
        password += specialchar[Math.floor(Math.random() * specialchar.length)];
        console.log(password);
    }
    return password.slice(0, keys.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", password);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page