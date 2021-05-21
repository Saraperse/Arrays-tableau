var readline = require("readline-sync");
var nombres = [];
for ( var cpt = 1; cpt <= 5; cpt++) {
    nombres.push(readline.questionInt(" saisir la note numero " + cpt + " : "));
}

console.log(nombres);
var m1= calculMoyenne(nombres);
console.log("La moyenne est de" + m1);



// var note1 = readline.questionInt( "Saisir la note numero 1 : ");

function calculMoyenne(nombres) {
    resultat = 0;

    for ( var i = 0; i < nombres.length; i++) {
        resultat = (resultat + nombres[i]);
    }

    var moyenne = resultat / nombres.lenght;
    return moyenne;
}