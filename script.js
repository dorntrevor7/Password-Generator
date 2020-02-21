// Assignment Code
//Call the button on the HTML page
var generateBtn = document.querySelector("#generate");
// Calling the html for the id password
var $passwordText = document.querySelector("#password");

//Listener to the UI's click to generate generatebtn
generateBtn.addEventListener("click", function () {

    var params = {
        Length: prompt("How long would you like your password to be?"),
        lowercase: confirm("Would you like to use lowercase characters?"),
        uppercase: confirm("Would you like to use uppercase characters?"),
        specialChars: confirm("Would you like to use special characters?"),
        numericChars: confirm("Would you like to use numeric characters?")
    };

    var pass = "";
    // runs the length of the length prompt 
    // checks to see if the confirms are true
    for (var i = 0; i < params.Length; i++) {
        // password is set to equal and add on a random lowercase character 
        if (params.lowercase != null) {
            pass += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            console.log(pass);
        }
        // password is set to equal and add on a random uppercase character 
        if (params.uppercase != null) {
            pass += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            console.log(pass);
        }
        // password is set to equal and add on a random numeric character 
        if (params.numericChars != null) {
            pass += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            console.log(pass);
        }
        // A string that has special chars. which is randomized
        // through an array with the length of the string
        if (params.specialChars != null) {
            specialchar = "!@#$%&*?";
            pass += specialchar[Math.floor(Math.random() * specialchar.length)];
            console.log(pass);
        }
        // password adds the string from pass

    }
    // slices the undefined off password and returns
    pass = pass.slice(0, params.Length);
    // Changes the actual html page
    $passwordText.textContent = pass;

});