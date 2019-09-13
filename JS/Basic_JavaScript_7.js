
/*Example of a globel variable */

var x = 10;
function Add_number_1() {
    document.write(20 + x + "<br>");
}
function Add_number_2() {
    document.write(x + 100);
}
Add_number_1();
Add_number_2();

/*Example os a local variable */

function Add_number_1() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_number_2() {
    document.write(y + 100);
}
Add_number_1();
Add_number_2();
/*use console.log() to help us debug our code*/

function Add_number_1() {
    var y = 10;
    console.log(15 + y);
}
function Add_number_2() {
    console.log(y + 100);
}
Add_number_1();
Add_number_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = " How are you today?";
    }
}

function check_Data() { 
    var score = prompt("Please enter your score: ");
    if (score > 70) {
        document.getElementById("Test").innerHTML = 
        document.write("You Passed!");
    }
    else {
        document.write("Good Luck next time.");
    }
}
//This function is not working
function Age_Function() { 
    var Age = prompt("Please enter you age:");
    if( Age >= 18) {
        document.write(" you are old enought to vote!");
    }
    else {
        document.write("You are not old enought to vote!");
    }
    document.getElementById("How old are you?").innerHTML = Vote;
}
//This function will pulls the time from my computer.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if ( Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    }
    else if (Time > 12 == Time > 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

