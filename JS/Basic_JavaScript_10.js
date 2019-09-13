//use a LET keyword to declare a variable.
var x = 82;
document.write("x ourside function: " + x);
{  
    let x = 33;
    document.write("<br>" + "x inside function: " + x);
}
document.write("<br>" + "x outside the function: " + x);

// while loop
function count_To_Ten() {
    var Digit = "";
    var x = 1;
    while(x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//For loop & Array
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Creating an Array.
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " + Cat_Picture[2] + ".";
}

//constant keyword
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let car = {
    make: "Dodge ",
    model: "Dart ",
    Year: "2020 ",
    color: "black ",
    description: function() {
        return "The car is a " + this.Year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//The break statement jumps OUT of a loop.
//This loop will stop at #4
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) { break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

//The continue statement jumps OVER a certain point and 
//continue execting the rest of the codes.
//This function will output(1,2,3,4,6,7,8,9) NO 5
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;