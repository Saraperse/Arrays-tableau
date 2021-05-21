var readline = require("readline-sync");
var nombre = readline.questionInt( "Quel nombre voulez-vous ? ");
var diviseur =  readline.questionInt( "Par quel nombre voulez-vous diviser ?")

var reponse = returnestDivisible(nombre, diviseur);
if(reponse){
    console.log("Le nombre " + nombre + "est divisible par" + diviseur);
}else{
    console.log("Le nombre " + nombre + " n'est pas divisible par" + diviseur);  
}



function returnestDivisible(nombre, diviseur){
    return nombre % diviseur === 0;
    // if( nombre % diviseur === 0){
    //   return true; 
    // }else { 
    //    return false;
    // }
}