/* this gives the button on the game page function */
function updateText() {
    document.getElementById("heading").innerHTML = "Javascript is awesome!";
}

function playCraps()
{
    // log that the function was called
    console.log("playCraps() function was called");

    // roll dice 1
    let roll1 = GenerateD6();

    //roll dice 2
    let roll2 = GenerateD6();

    console.log("roll1 = " + roll1);
    console.log("roll2 = " + roll2);
    
    let sum = roll1 + roll2;

    // display roll 1 in the roll 1 div
    document.getElementById("divRoll1").textContent = "Roll 1 : " + roll1;
            document.getElementById("divRoll2").textContent = "Roll 2 : " + roll2;
            document.getElementById("divSum").textContent = "Sum : " + sum;
            
            let result = "";
            
            // see if the user last - if they rolled sum of 7 or 11
            if(sum == 7 || sum == 11)
                {
                console.log("you lost");
                result = "You LOST!!!!";
            }
            // check if we rolled an even number
            // modulus - do a division problem and we get te hremainder as the result
            // 2/2 = 1 with no remainder = even number
            // 4/2 = 2 with no remainder = even number
            // 5/2 = 2 with a remainder of 1 = odd number
            // we also need to make sure that roll1 and roll2 resulted in the same value
            else if (roll1 % 2 == 0 && roll1 == roll2)
                {
                    console.log("you won");
                    result = "You WON!!!";
                }
                // the catch-all else statement if neither of the above to true, this else statement will run
                else
                {
                    console.log("you tied (pushed)");
                    result = "You tried (you pushed)";
                }
                
            // show the result in the result div
            document.getElementById("divResult").textContent = result;
        }

        // create a function to generate a random number
        function GenerateD6()
        {
            // create a variable to hold a number
            // Math.random() is a built in JavaScript function which generates a random number
            let die = Math.random() * 6; // I want to replicate a 6 sided die
            
            // round the number and return the value
            return Math.ceil(die);
        }

        // create a function to validate the form
        function validateForm()
        {
            // log that the function was called
            let FullName = "";

            // get the values from the form and trim any whitespace
            let firstName = document.getElementById("txtFirstName").value.trim();

            let lastName = document.getElementById("txtLastName").value.trim();

            let zipCode = document.getElementById("txtZipCode").value.trim();

            // log the values to the console
            console.log("First Name: " + firstName);
            console.log("Last Name: " + lastName);
            console.log("Zip Code: " + zipCode);

            // create a variable to hold the message
            let message = "";

            // create the full name by concatenating the first and last names
            fullName = document.getElementById("txtFirstName").value.trim() + " " + document.getElementById("txtLastName").value.trim();

            // log the full name to the console
            console.log("fullName= " + fullName);

            // check if the full name is greater than 20 characters or if the full name is only 1 character
            if(fullName.length > 20 || fullName.length == 1)
            {
                message = "Invalid name. Please try again.";
                console.log("invalid name");
            }
            // check if the zip code is not equal to 5 characters
            else if(zipCode.length != 5)
            {
                message = "Invalid zip code. Please try again.";
                console.log("invalid zip code");
            }
            // if the full name is valid and the zip code is valid, then display the welcome message
            else 
            {
                message = "Welcome, " + firstName + ". The secret word is Validation.";
            }

            // display the message in the divMessage div
            document.getElementById("divMessage").textContent = message;
        }