
//Chiedere all'utente di inserire una parola
//creare una funzione per capire
//se una parola è palindroma

//TOOLS:
//Prompt to ask user to choose a word
//a check on this word (if)
//a method to check the condition (reverse?)
//a function

const chosen_word = prompt("Scegli una parola") 

//NON FUNZIONA MA CONSERVO COME APPUNTI
/* //created un array
const word_array = [];
for (let i = 0; i < chosen_word.length; i++) {
    word_array.push(chosen_word[i])     
}
if (word_array === word_array.reverse()) {
    } */

function PalindromeVerify(chosen_word) {
    let check = "palindroma"
    //console.log(chosen_word.length);
    let lunghezza = chosen_word.length - 1;
    
    
    for (let i = 0; (i < chosen_word.length) && (check = "palindroma"); i++) {
        console.log(chosen_word[i], chosen_word[lunghezza]);
        
        if (chosen_word[i] !== chosen_word[lunghezza]) {
          check = "non palindroma";
          
        }
        lunghezza = lunghezza - 1;    
        } 
       
    return document.querySelector(".text").innerHTML = `La parola é ${check}`  
}

   PalindromeVerify(chosen_word) 


















