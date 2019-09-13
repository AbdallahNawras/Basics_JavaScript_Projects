
/*TERNARY OPERATORS*/
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You can vote!":"You are not old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " Thank you.";
}

/*This is an example of object constructor*/
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Account(name, type, action, amount) {
    this.Account_name = name;
    this.Account_type = type; 
    this.Account_action = action;
    this.Account_amount = amount;
}
var abood = new Account("abood", "saving", "withdraw", 500 );
var abdallah = new Account("abdallah", "checking", "deposit", 200 )

function account_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Name: " + abood.Account_name + " account you like to do the action to: " + abood.Account_type + " action you like to do: " + abood.Account_action + " amount : $" + abood.Account_amount;
}
/*Nested Function(function inside function)*/
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function Function_1() {
    document.getElementById("Another_Nested_Function").innerHTML = Function_2();
    function Function_2() {
        var org_Number = 5;
        function Function_3() {
            org_Number +=2 }
        Function_3();
        return org_Number;
    }
}