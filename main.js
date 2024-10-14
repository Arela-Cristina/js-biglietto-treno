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

//multiply the age of the passenger by the kilometers that want to travel (0.21 € by km)
const kmRate = 0.21;
let fullRate = kmNum * kmRate;
console.log (`This full rate:  ${fullRate}`);

//Conditions
//impose a 20% discount for minor passenger  

//impose a 40% discount for passengers over 65 years old

