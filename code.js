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

    // create a variable to hold the interval id
        let intervalID = 0;

    // function to start moving the image
    function startMove()
    {
        // get the image element by its id
        let image = document.getElementById("memeImage");

        // store the current interval id in the intervalID variable so we can clear it later
        intervalID = setInterval(function() {
            // the code that runs repeatedly goes here
            let xCord = getRandomNum();
            let yCord = getRandomNum();
            // set the image's position to the new random coordinates
            image.style.left = xCord + "px";
            image.style.top = yCord + "px";
        }, 20);

        // disable the start button and enable the stop button
        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    }

    // function to stop moving the image
    function stopMove()
    {
        // call clear interval and pass in the interval id
        clearInterval(intervalID);
        // enable the start button and disable the stop button
        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnStop").disabled = true;
    }
    
    // function to randomly generate a number 
    function getRandomNum()
    {
        return Math.floor(Math.random() * 800);
    }

// function to test if a word is a palindrome
function testPalin()
{
    // get the value that the user entered in the textbox
    let userInput = document.getElementById("txtInput").value.trim();

    // console.log("user Input: " + userInput);

    isPalindrome(userInput);

    // isPalindrome(userInput) == true
    // this statement implies == true, you could write it out
    if(isPalindrome(userInput))
    {
        document.getElementById("divResult").textContent = "Yes, " + 
        userInput + " is a palindrome."
    }
        else
        {
            document.getElementById("divResult").textContent = "No, " + 
            userInput + " is not a palindrome."
        }
        
    }

function isPalindrome(wordToTest)
{
    // remove any spaces inside of the word(s)
    let cleanedWord = wordToTest.replace(/\s/g, "");

    cleanedWord = cleanedWord.toLowerCase();

    // console.log("cleanedWord= " + cleanedWord);

    // convert the cleaned string to an array
    let arrCleaned = cleanedWord.split("");

    //reverse the array contant
    arrCleaned = arrCleaned.reverse("");

    // take our reversed array and convert it back to a string
    let reversedWord = arrCleaned.join("");

    console.log("Test= " + reversedWord);

    // compare if the cleaned word and the reversed words are the same
    return cleanedWord == reversedWord;
}

// function to add an audio element to the page
function addAudio()
{
    // create an audio element
    let audioElem = document.createElement("audio");

    // set the id attribute of the audio element
    audioElem.setAttribute("id", "myAudio");

    // set the source attribute of the audio element
    audioElem.setAttribute("src", "dragon-studio-crowd-cheer-and-applause-406644.mp3");

    // set the controls attribute of the audio element
    audioElem.setAttribute("controls", "controls");

    // append the audio element to the divAudio element
    document.getElementById("divAudio").appendChild(audioElem);

    // hide the add audio button and show the play and pause buttons
    document.getElementById("btnAddAudio").hidden = true;
    
    // show the play and pause buttons
    document.getElementById("btnPlayAudio").hidden = false;
    document.getElementById("btnPauseAudio").hidden = false;
}

// function to play the audio
function playAudio()
{
    let audio = document.getElementById("myAudio");
    audio.play();
}

// function to pause the audio
function pauseAudio()
{
    let audio = document.getElementById("myAudio");
    audio.pause();
}