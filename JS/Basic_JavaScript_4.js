function my_Dictionary() {
    var Animal = {
        Species:"Dog",//key:value.
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//will be deleted.
    document.getElementById("Dictionary").innerHTML = Animal.Color;

}