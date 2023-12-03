//Pari e Dispari
//L’utente sceglie pari o dispari 
//e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//TOOLS
//Prompt to ask user an "even or odd" number
//Prompt to ask user a number between 1 and 5.
//function to generate
//a random number between 1 and 5
//sum
//condition (if) to say if sum is even or odd


let userEvenOdd = prompt("Pari o dispari?")
console.log(userEvenOdd);
const userNumber = Number(prompt("Scegli un numero compreso tra 1 e 5"))
console.log("Hai scelto il numero:", userNumber);

/* Srivere una funzione per generare un numero da 1 a 5 */
function pcRandom() {
    const pcNumber = Math.floor((Math.random() * 5)+1);
    //console.log("Numero scelto dal pc:", pcNumber);
    return pcNumber
}
console.log(pcRandom(pcNumber));
const numberSum = (userNumber + pcNumber);
console.log("La somma è: ", numberSum);
//console.log("Il resto è: ", numberSum % 2);

function EvenOdd(numberSum) {
    
     if (((numberSum % 2 == 0) && (userEvenOdd === "pari")) || ((numberSum % 2 > 0) && (userEvenOdd === "dispari"))) {
         return ("Hai vinto!");
     } else {
         return ("Hai perso");
     }  
}


