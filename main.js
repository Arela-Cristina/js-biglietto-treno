//Train Ticket Rate

//request the user's age through a prompt
let userAge = parseInt(prompt('Type your age'));
let age = userAge;
console.log (`This is user age: ${age}`);

//request the number of kilometers that the passenger wishes to travel
let km = parseInt(prompt('Type km numbers would you like to travel'));
let kmNum = km;
console.log (`This is km numbers:  ${kmNum}`);

//multiply the age of the passenger by the kilometers that want to travel (0.21 € by km)
const kmRate = 0.21;
let fullRate = kmNum * kmRate;


//Conditions
//impose a 0% discount   as a fullRate
let discount = fullRate.toFixed(2);
console.log (`This is full rate $  ${fullRate}`);
//impose a 20% discount for minor passenger  
if(age < 18){
    discount = fullRate * (20 / 100);
    discount = (fullRate - discount).toFixed(2);
    console.log(`Apply 20% discount for minor pax $ ${discount}`);
//impose a 40% discount for passengers over 65 years old
} else if ( age >= 65) {
    discount = fullRate * (40 / 100);
    discount = (fullRate - discount).toFixed(2);
    console.log(`Apply 40% discount for pax over 65 $ ${discount}`)
}

