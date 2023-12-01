
//Chiedere all'utente di inserire una parola
//creare una funzione per capire
//se una parola è palindroma

//TOOLS:
//Prompt to ask user to choose a word
//a check on this word (if)
//a method to check the condition (reverse?)
//a function

const chosen_word = prompt("Scegli una parola") 

function palin_word(chosen_word) {  
//created un array
const word_array = [chosen_word]
//converted array into separeted items
const spelling_array = word_array.toString()  
const rev_spelling_array = spelling_array.reverse()
if (spelling_array = rev_spelling_array) {
    console.log("La parola è palindroma");    
}
}

palin_word(chosen_word)






