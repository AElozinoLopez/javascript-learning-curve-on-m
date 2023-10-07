// My first JavaScript code
console.log("Hello World");

// Variables
let name = "Elozino";
let age = 30;

console.log(name);

// Objects
let person = {
  name: "Elozino Lopez",
  age: 30,
};

// Using the Dot Notation to change the property of an object
person.name = "ASAIJE Elozino Lopez";

// Using the Bracket Notation to change the value of an object
person["age"] = 31;
console.log(person);

//Arrays
let selectedColors = ["red", "green", "blue"];

//Adding to the list of the array
selectedColors[3] = "yellow";
console.log(selectedColors);

//Functions
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("Chinwe", "ElozinoLopez");

// Operators
// + - * / % **
// === !== == > < >= =<
// ++x x++  --x  x--
// Ternary Operator
let point = 110;
let result = point > 100 ? "Gold" : "Silver";
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
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//Conditional Statements
// If..else
let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour > 12 && hour <= 18) console.log("Good afternoon");
else console.log("Good evening");

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
  console.log("Hello World");
}

// Exercise 1
// Write a function that takes two numbers and returns the maximum of the two.
function numbers(a, b) {
  if (a > b) console.log(a);
  else if (b > a) console.log(b);
  else console.log("The numbers are equal");
}
numbers(4, 4);

// Exercise 2
function isLandScape(width, height) {
  if (width > height) return "Picture is landscape";
  return "Picture is portrait";
}

console.log(isLandScape(20, 25));

// The above function is supposed to either return true or false. See implementation below
function isLandScape(width, height) {
  return width > height;
}

//Exercise 3
function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

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

  if (speed < speedLimit + kmPerPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License Suspended");
    else console.log("Points", points);
  }
}
checkSpeed(180);

//Exercise 5
// Function to display even and odd numbers within a certain range

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0)
    //      console.log(i, 'Even');
    // else
    //     console.log(i, 'Odd');
    // Using ternary operator
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
showNumbers(5);

//Exercise 6
// function to calculate truthy values

const array = [1, 2, 3, 4];

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(array));

//Exercise 7
//Function to display values of an object of type string
const movie = {
  title: "a",
  releasedYear: 2018,
  rating: 5,
  director: "b",
};

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
showProperties(movie);

//Exercise 8
// Function to determine the sum of 3 and 5 to a certain limit

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;

        return sum;        
}
console.log(sum(20));


// Exercise 9
// Function to calculate the grades of students
// Average = 70
// 0 - 59 -> F
// 60 - 69 -> D
// 70 - 79 -> C
// 80 - 89 -> B
// 90 - 100 -> A
const marks = [80, 67, 90];

function calculateGrades(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;  //to get the total marks acquired by student

    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}
console.log(calculateGrades(marks));

//Creating a separate function to calculate the average of numbers
//Function to calculate the average of two numbers in an array
function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    return average = sum / array.length;
    }
}

//Exercise 10
//Function to show number of stars 
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars(3);


//EXercise 11
//Function to create prime numbers 
function showPrimes(limit) {
    for (number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor ++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }                
        }
        if (isPrime === true) console.log(number);
    }
}
showPrimes(10);

//Function to calculate the prime factors of a number
function calculatePrime(number) {    
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
           return false;   

    return true; 
}

//End of Exercises

//FACTORY FUNCTION
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
}; 

//The object above can be made a factory function as below:
function createCircle(radius) {
   return{ 
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(3);
console.log(circle1);

const circle2 = createCircle(77);
console.log(circle2);

//Constructor Function 
function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle3 = new Circle(8);
console.log(circle3);

//Playing with Objects
const elozinoLopez = {
  age: 22
}
// Adding new properties to the object
elozinoLopez.school = 'Stutern';
elozinoLopez.course = 'Backend Engineering';
elozinoLopez.yearOfGraduation = 2023;
elozinoLopez.draw = function () {
  console.log('draw');
}

//Deleting properties of an object
delete elozinoLopez.yearOfGraduation;

console.log('elozinoLopez', elozinoLopez);

console.log('Note:', `Every object has a constructor property and that references the 
function that was used to create the object.`);

// elozinoLopez.call(); //is used to create a new function
// elozinoLopez.apply(); //is used to call an array that has been declared somewhere else in the program 

//Using the For...in and the For...of Loop to iterate over an object
//An object is not iterable. To iterate over an object, use the Object.key method with the
//for...in loop. This will convert the object to an array which is iterable.

//For...in 
for (let key in elozinoLopez) {
  console.log(key, elozinoLopez[key]);
}

//For...of  with object
for (let key of Object.key(elozinoLopez)) {
  console.log(key);
}