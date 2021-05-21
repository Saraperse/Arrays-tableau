var readline = require("readline-sync");
var tableau = [9, 12, 11, 16];

var saisie = readline.questionInt("Quel nombre voulez -vous ? ");

var bool = verifTabEstDivisiblePar(tableau, saisie);
if (bool) {
    console.log('Le tableau contient seulement des valeurs divisibles par ' + saisie);
} else {
    console.log('Le tableau ne contient pas que des valeurs divisibles par ' + saisie);
}

function verifTabEstDivisiblePar(tab, diviseur) {
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i]);

        if (tab[i] % diviseur !== 0) {
            return false;
        }

    }
    return true;
}