// My first JavaScript code
console.log('Hello World');

// Variables
let name = 'Elozino';
let age = 30;

console.log(name);

// Objects
let person = {
    name: 'Elozino Lopez',
    age: 30
}

// Using the Dot Notation to change the property of an object
person.name = 'ASAIJE Elozino Lopez';

// Using the Bracket Notation to change the value of an object
person['age'] = 31;
console.log(person);

//Arrays
let selectedColors = ['red', 'green', 'blue']

//Adding to the list of the array
selectedColors[3] = 'yellow';
console.log(selectedColors); 

//Functions
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Chinwe', 'ElozinoLopez');

// Operators 
// + - * / % **
// === !== == > < >= =< 
// ++x x++  --x  x--
// Ternary Operator
let point = 110;
let result = point > 100 ? 'Gold' : 'Silver' 
console.log(result);

//Conditional Operators
// && || !
let highIncome = true;
let goodCreditScore = false;
let elligibleForLoan = highIncome && goodCreditScore;
let averagelyElligibleForLoan = highIncome || goodCreditScore;
console.log(elligibleForLoan);
console.log(averagelyElligibleForLoan);

let notElligibleForLoan = !elligibleForLoan;
console.log(notElligibleForLoan);

//QUIZ
// What is the result of x
let x = (2 + 3) * (4 + 5);
console.log(x);