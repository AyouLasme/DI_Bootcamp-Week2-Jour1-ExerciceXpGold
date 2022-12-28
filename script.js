// Exercice1
let sentence = ["my","favorite","color","is","blue"];
sentence.join(" ");


// Exercice2
let str1 = "Mia";
let str2 = "Kayla";
const myArray1 = str1.split("");
const myArray2 = str2.split("");
str1 = str1.split("");
str1.splice(0, 2, 'p', 'o');
str1 = str1.join("");

str2 = str2.split("");
str2.splice(0, 2, 'm', 'i');
str2 = str2.join("");

let Str3 = str1 + ' ' + str2;

console.log(Str3);

// Exercice3
let num1 = prompt("Entrer un premier numero");
let num2 = prompt("Entrer un deuxieme numero");
alert(num1+num2);

let operateur = prompt("quelle est l'opération que vous souhaitez faire? (+, -, /, *");
switch(operateur) {
    case '+' :
        resultat = num1 + num2;
        break;
    case '-' :
        resultat = num1 - num2;
        break;
    case '*' :
        resultat = num1 * num2;
        break;
    case '/' :
        resultat = num1 / num2;
        break;
    default :
        resultat = "erreur";
}

alert("le resultat est:" +resultat);




