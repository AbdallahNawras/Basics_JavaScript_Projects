
function foo(){
    var First_Name = "Abdallah";
    var Last_Name = "Nawras";
    var add_color = First_Name.fontcolor("blue") + Last_Name.fontcolor("red");
    document.getElementById("Call_Me").innerHTML = add_color;
}

//Using += Operator to concatenate a string.
function myFunction() {
   var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
