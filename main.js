//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//request the user's age through a prompt
let userAge = parseInt(prompt('Type your age'));
let age = userAge;
console.log (`This is user age: ${age}`);

//request the number of kilometers that the passenger wishes to travel
let km = parseInt(prompt('Type km numbers would you like to travel'));
let kmNum = km;
console.log (`This km numbers:  ${kmNum}`);

//multiply the age of the passenger by the kilometers that want to travel
const kmRate = 0.21;
let fullRate = kmNum * kmRate;
console.log (`This full rate:  ${fullRate}`);

