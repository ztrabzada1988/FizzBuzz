// 1 - Define Functions
function validateInput(inputNumber) {
    //by default we are assuming that the input is valid (setting a FLAG to true)
    var userInputCorrectFlag = true;

    //at least 1 characters
    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }
    //no spaces indexof (check charactor by char)
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }
    //the limit is a number (if the rounded value of your number (Math.floor(inputNumber)) is the same with the initial number (inputNumber), it means that the number (inputNumber) was integer in the first place)
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    // if all the above traps doesnt trigger, playFizzBuzz
    if (userInputCorrectFlag == true) {
        playFizzBuzz(inputNumber);
    }
}

//
function playFizzBuzz(limit) {
    for (var i = 1; i <= limit; i++) {
        $('#results').append(checkFizzBuzz(i));
    }
}


function checkFizzBuzz(currentNumber) {

    //set the default value for the msg variable
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if (currentNumber % 15 == 0) {
        msg = "<li>FizzBuzz</li>";
    }
    //output the msg
    return msg;
}


// 2 - Use Functions
$(document).ready(function () {
    // 1.  Ask user (prompt) for input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    // 2.  Validate the input
    validateInput(limit);

});
