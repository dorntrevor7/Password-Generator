// Assignment Code
//Call the button on the HTML page
var generateBtn = document.querySelector("#generate");

//Function runs when the button is clicked 
function writePassword() {
    var params = {
        Length: prompt("How long would you like your password to be?"),
        lowercase: confirm("Would you like to use lowercase characters?"),
        uppercase: confirm("Would you like to use uppercase characters?"),
        specialChars: confirm("Would you like to use special characters?"),
        numericChars: confirm("Would you like to use numeric characters?")
    };
    // generatePassword invokes the info from writePassword function
    var password = generatePassword(params);
    // Calling the html for the id password
    var passwordText = document.querySelector("#password");
    // Changes the actual html page
    passwordText.textContent = password;
}

// runs the length of the length prompt 
// checks to see if the confirms are true
function generatePassword(e) {
    for (var i = 0; i < e.Length; i++) {
        var pass = "";
        // password is set to equal and add on a random lowercase character 
        if (!e.lowerCase) {
            pass += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            console.log(pass);
        }
        // password is set to equal and add on a random uppercase character 
        if (!e.upperCase) {
            pass += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            console.log(pass);
        }
        // password is set to equal and add on a random numeric character 
        if (!e.numeric) {
            pass += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            console.log(pass);
        }
        // A string that has special chars. which is randomized
        // through an array with the length of the string
        if (!e.special) {
            specialchar = "!@#$%&*?";
            pass += specialchar[Math.floor(Math.random() * specialchar.length)];
            console.log(pass);
        }
        // password adds the string from pass
        var password = password + pass;
        console.log(password);

    }
    // slices the undefined off password and returns
    return password = password.slice(9);

}
//Listener to the UI's click to generate generatebtn
generateBtn.addEventListener("click", writePassword);