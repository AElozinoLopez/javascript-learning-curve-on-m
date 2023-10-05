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

// Exercise
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//Conditional Statements
// If..else 
let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour > 12 && hour <= 18)
    console.log('Good afternoon');
else 
    console.log('Good evening');


//Switch...case
// let role;
// switch (role) {
//     case: console.log('Guest User')
//     break
//     case: (console.log('Admin User'))
//     break
//     default: 
// }

// For loop
for (let i = 0; i < 5; i++) {
    console.log('Hello World');
}

// Exercise 1
// Write a function that takes two numbers and returns the maximum of the two.
function numbers(a, b) {
    if (a > b) console.log(a);
    else if (b > a) console.log(b);
    else console.log('The numbers are equal');
}
numbers(4, 4);

// Exercise 2
function isLandScape (width, height) {
    if (width > height)  return 'Picture is landscape';
    return 'Picture is portrait'
}

console.log(isLandScape (20, 25));  

// The above function is supposed to either return true or false. See implementation below
function isLandScape (width, height) {
    return (width > height);
}

//Exercise 3
function fizzBuzz (input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0) 
        return 'Fizz';

    if (input % 5 === 0) 
        return 'Buzz';

    return input;
}

const output = fizzBuzz(15);
console.log(output);


//Exercise 4
//Function to check the speed of a moving vehicle and suspend teh license at certain speed limits
// const speed = 70;
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) 
        console.log('Ok');
    else {
        const points = Math.floor ((speed - speedLimit) / kmPerPoint);
        if (points >= 12) 
            console.log('License Suspended');
        else 
            console.log('Points', points);
    }

}
checkSpeed(180); 

//Exercise 5
// Function to display even and odd numbers within a certain range

function showNumbers (limit) {
    for (let i = 0; i <= limit; i++) {
        // if (i % 2 === 0) 
        //      console.log(i, 'Even');
        // else 
        //     console.log(i, 'Odd');
        // Using ternary operator
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}
showNumbers(5); 


//Exercise 6 
// function to calculate truthy values

const array = [1, 2, 3, 4];

function countTruthy (array) {
    let count = 0;
    for (let value of array) 
        if (value) 
            count++;
        return count;
}

console.log(countTruthy(array));

