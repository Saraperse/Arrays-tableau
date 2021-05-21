//Main 

var tableau = [4, 8, 12, 16];
var readline = require("readline-sync");

var choix = -1;
while (choix !== 0) {
    afficherMenu();
    choix = readline.questionInt("Quel choix voulez-vous ? ");

    switch (choix) {
        case 1:
           afficherTableau(tableau);
            break;
        case 2:
            var moyenne = calculMoyenne(tableau);
            console.log("La moyenne est : " + moyenne);
            break;
        case 0:
            console.log("A+");
            break;
        default:
            console.log("cas non pris en compte");
    }
}





















// afficherTableau(tableau);
// var moyenne = calculMoyenne (tableau);
// console.log("La moyenne est " + moyenne);





// //*
// *Functions
// */


function afficherMenu() {
    var menu = "1/ afficher tableau\n";
    menu += "2/ calculer la moyenne\n";
    menu += "0/sortir";
    console.log(menu);

}

function afficherTableau(tab) {
    for (var i = 0; i < tab.length; i++) {
        console.log("Indice : " + i + " - valeur : " + tab[i]);
    }
}

function calculMoyenne(tab) {
    var resultat = 0;
    for (var i = 0; i < tab.length; i++) {
        
        resultat += tab[i];
    }
    return resultat / tab.length;
}