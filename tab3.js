var tab = [ 5, 12, 18, 13, 14, 10, 7];
resultat = 0;

for (i=0; i<=6; i++){ // i<=tab.length -1
    resultat = (resultat + tab[i]);
}
var moyenne = resultat/7;
console.log("La moyenne est de  : " + moyenne) // pour avoir un seul chiffre après  Math.round(moyenne*10/10);


// Pour calculer le moyenne de n'importe quel tableau :

var tab = [ 5, 12, 18, 13, 14, 10, 7];
resultat = 0;

for (i=0; i<=tab.length -1; i++){ // i<=tab.length -1
    resultat = (resultat + tab[i]);
}
var moyenne = resultat/tab.lenght;
console.log("La moyenne est de  : " + Math.round(moyenne*10)/10);