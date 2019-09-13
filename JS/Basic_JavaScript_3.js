function changeStyle(p1, p2) {
    document.getElementById("multiple").innerHTML = p1*p2;
    return p1 * p2;
}

function findSum(p1, p2){
    var num = p1 + p2;
document.getElementById("sum").innerHTML = num;
}

function division(p1,p2){
    var num = p1 / p2;
    document.getElementById("div").innerHTML = num;
}

function mixMath(){
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("mix").innerHTML = simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function increment() {
    var x = 5;
    x++;
    document.write(x);
}

function decrement() {
    var x = 5;
    x--;
    document.write(x);
}
//to have an alert with random number.
window.alert(Math.random());

//random number between... and ...
window.alert(Math.random()*100);

//Power
window.alert(Math.pow(8,2));
