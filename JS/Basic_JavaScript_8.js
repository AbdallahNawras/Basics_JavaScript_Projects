
//This is the CONCAT() method connects two or more strings.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//This is the SLICE method used to extacts a section of a string.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//This is the toUpperCase() method used to uppercase letters. 
function upper_Case() {
    var text = " no more school";
    var my_text = text.toUpperCase();
    document.getElementById("Case").innerHTML = my_text;
}

//This is SEARCH() method used to find the position of the match.
function search_Method() {
    var text = "This is just a text";
    var any_text = text.search("just a");
    document.getElementById("Search").innerHTML = any_text;
}

//return number as a string.
function string_Method() { 
    var x = 182;
    document.getElementById("Number_to_string").innerHTML = x.toString();
}

//toPrecision() method specified the length of a number.
function precision_Method() {
    var x = 12345.12345678910111213141516;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

//toFixed() method specified the length of the decimals numbers.
function to_Fixed() {
    var x = 7.1634567;
    var num = x.toFixed(3);
    document.getElementById("fix").innerHTML = num;
}

function value_of() {
    var x = "Hello there!";
    var num = x.valueOf();
    document.getElementById("value").innerHTML = num;

}