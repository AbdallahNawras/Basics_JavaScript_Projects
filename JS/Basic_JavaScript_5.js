//display the data type.
document.write(typeof "word");

document.write(typeof 3);

//To check the data type.
document.write(isNaN('This is a string'));//true
document.write(isNaN('007'));//false

//Display Infinity.
document.write(2E310);

//Display negative Infinity.
document.write(-3E310);

function my_Function() {
    //NaN : Not a Number.
    document.getElementById("Test").innerHTML = 0/0;
}

//************ test Boolean Logic ***********
document.write(10 > 2);//T
document.write(10 < 2);//F

//OR
document.write(10 > 2 || 4 > 5);//T OR F = T
document.write(10 < 3 || 10 < 5);//F OR F = F

//AND
document.write(10 > 2 && 4 > 5);//T AND F = F
document.write(10 > 3 && 10 > 5);//T AND T = T

//NOT
document.write(4 != 5);//True

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
    //This is "double negative"
 /* document.getElementById("Not").innerHTML = !(20 > 10); (F) */
}


//************************************/
//This will output 105 treats 10 as a string it is called:Type Coercion.
document.write("10" + 5);

//double == signs(is... equals...)
document.write(4 == 4);//True(4 is equal to 4)
document.write(4 == 5);//False(is 4 equals 5)

//Triple Equal Signs(is.. equals .. also checks if they have the same data_type)
i = 5;
x = 4;
y = 4;
z = "4";

A = "GOOD";
B = "GOOD";
document.write(x===y);//T(4 equals 4 and same data_type)
document.write(x===z);//F(4 equals 4 but different data_type)
document.write(A===B);//T(same words and same data_type)
document.write(x===B);//F
document.write(x===i);//F