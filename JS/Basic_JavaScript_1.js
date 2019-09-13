
//To assign a variable x to value:abdallah
var x = "abdallah"
document.write(x); // to display abdallah
/*
//to create an alert message
window.alert("Hi there!");

var l = "Alert!! EXIT NOW"
window.alert(l);
*/
//backslash to disable the special meaning of the following character.
document.write("Lisa told bart, \"knock it off! or I will tell dad\" ");

//to connect two strings together add +
document.write("my name is " + "Abdallah");

//assign a concatenated string value to a variable 
var c = "-- what a good" + "dayyyyyyy"
document.write(c)

//assign multiple variable in one statement
var Family = "Nawras", Dad = "MO", Mom = "AM", Brother = "AB";
var Dad = Dad.fontcolor("red");
document.write(Dad);// it will display MO only.

//to change font color using str.fontcolor
var blues = "-- I have the blues";  //assign text to the value
var blues = blues.fontcolor("blue"); //select color
document.write(blues); //display


document.write("( ");
document.write(3 + 6);
document.write(" )");

function My_First_Function() {
    var String = "This text is green!";
    var result = String.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}
