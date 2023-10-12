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
    for (arrayNum = 2; arrayNum <= limit; arrayNum++) {

        let isPrime = true;
        for (let factor = 2; factor < arrayNum; factor ++) {
            if (arrayNum % factor === 0) {
                isPrime = false;
                break;
            }                
        }
        if (isPrime === true) console.log(arrayNum);
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
for (let key in elozinoLopez) 
  console.log(key, elozinoLopez[key]);


//For...of  with object
for (let key of Object.keys(elozinoLopez)) //Using the Object.keys() method to enumerate over the propertied of an object.
console.log(key);  // Only displays the key. To get the values, see below:

//Using the Object.entries() method to get the key-value pair of the object
for (let entry of Object.entries(elozinoLopez))
console.log(entry);

console.log('Note', `To see if a given property or method exists in an object, 
we use the in property together with an if statement as shown below`);

if ('age' in elozinoLopez) console.log('yes');


console.log('Cloning an Object');
//Old method to clone
//Using the elozinoLopez object as the reference object
const elozinoJunior = {};
for (let key in elozinoLopez)
elozinoJunior[key] = elozinoLopez[key];
console.log('elozinoJunior', elozinoJunior); 

//Recent method to clone
//This method makes use of the Object.assign() method
const elozinoJunior2 = Object.assign({}, elozinoLopez); // This replaces lines 375 to 377
console.log('elozinoJunior2', elozinoJunior2); 

//The greatest way to clone
//This makes use of the spread operator (...)
const elozinoJunior3 = {...elozinoLopez};
console.log('elozinoJunior3', elozinoJunior3);

//Garbage Collector
// This is how JavaScript deallocates memory location from variables and constants that are
// no longer in use. The process is automatic

//Math object
//It is a special object in JavaScript that allows us perform mathematical operations.
//The Math object comes with a variety of methods that you read up in MDN documentation 

//String object
//String is an object that comes with varieties of methods. 
//This is different from the string primitive

const teller = "Chioma";  // string primitive
console.log(teller);

const teller2 = new String('Chomzy'); 

const teller3 = '  Chima   \'Obi Ike';  //Using the dot notation with a string variable turns the 
//string primitive to an object and allow us access certain properties as shown below:
 teller3.length
 teller3.includes('Brain');
 teller3[0];
 teller3.startsWith('Chima');
 teller3.endsWith('a'),
 teller3.indexOf('Chima');
 teller3.replace('Chima', 'Mary')
 teller3.toUpperCase();
 teller3.toLowerCase();
 teller3.trim();
 teller3.split(' ');
console.log(teller3);

//Escape Notation
// This is used to introduce special characters in a string. 
// \n for new line
// \' to add a single quote . This is used in line 406

//But the use of escape notation is too noisy. Instead, use template literals represented by backtiks ``
//Benefits of using template literals
// 1. You can format your text exactly as you want it to appear to the user. eg
const year = 2024;
const email = `Dear Jude,

Thank you for signing up on our mailing list.

Looking forward to ${year} with  ${49 + 58886999} target!

Regards,
ElozinoLopez`

console.log(email);

// 2. You can add a placeholder indicated by ${} with which you can insert any expression or call a variable or constant
//You can use teh template literal to call a function that returns a value


// Date object
//This is used to dynamically assign date in a project

// 3 ways of creating a date object
const now = new Date();  //Looks like this line must be included before any of date1 and date2
const date1 = new Date('October 8 2023 09:00'); // Assigning date as a string
const date2 = new Date(2023, 9, 8, 10) //year, month (month starts counting from 0), day, time
//now.getMonth(February);
now.setFullYear(2024);
// The date object has 2 methods - set and get

//Displaying the Date object on teh console
//All the date objects have a few method for converting them to a string. Examples below:
now.toDateString();  //use like this on the console to get output
now.toTimeString();
now.toISOString(); //Commonly used in web applications to transfer date between the server and the client
console.log(now);    //To execute it in the terminal

//EXERCISE 1
//Initialize an object using an object literal. 
//Create an address object that has all the following properties - street, city, zipCode. 
//Then create a function called showAddress(address) that displays all the properties of this object 
// along with their value

let address = {
  street: '20 Afolabi Sole Street, Okota',
  city: 'Lagos',
  zipCode: 123456
};

function showAddress(address) {
  for (let key in address)
    console.log(key,':', address[key]);
}

showAddress(address);


//EXERCISE 2
//Initialize the address object in exercise 1 using the a Factory function and a constructor function

//Factoru function
address = {
  street: 'street',
  city : 'city',
  zipCode : 'zipCode'
};


function createAddress(address, city, zipCode) {
  return {
    address,
    city,
    zipCode
  }
}

//Creating a new address with the Factory Function
const addressOfElozino = createAddress('Afolabi', 'Lagos', 123456);

console.log(`Elozino's address:`, addressOfElozino);

//Constructor Function
function CreateAnAddress(street, city, zipCode) {
  this.street = 'Court 1';
  this.city = 'Port-Harcourt';
  this.zipCode = '34567'
}

//Creating a new address with the Constructor Function
let addressOfChinwe = new CreateAnAddress('Court 1', 'Port-Harcourt', 232 );

console.log('Address of Chinwe is', addressOfChinwe);


//EXERCISE 3
// Take the constructor function CreateAnAddress and create two addresses.
// Create two functions to:
// a. check if both addresses are equal
// b. check if both addresses are same

let addresses1 = new CreateAnAddress('11 Awolowo Road', 'Lagos', '12345');
let addresses2 = new CreateAnAddress('MTN Plaza', 'Lagos', '345123');

//a. are equal
function areEqual(addresses1, addresses2) {
//to check if the objects are equal, you have to compare their properties    
return addresses1.street === addresses2.street && 
  addresses1.city === addresses2.city &&
  addresses1.zipCode === addresses2.zipCode;
}

console.log(areEqual(addresses1, addresses2));

//b. are same
//to check if 2 objects are same, you have to compare their reference using the strict equality
function areSame(addresses1, addresses2) {
  return addresses1 === addresses2;
  
}

console.log(areSame(addresses1, addresses2));

//Exercise 4
//Create a blog post object with these properties - title, body, author, views, comments (author, body), isLive

const blogPost = {
  title: 'My Journey',  
  body: 'Hello World! Welcome to my blog post',
  author: 'Elozino Lopez',
  views: 3000000,
  comments: [                    //To have a list of objects inside an object, set the object to an array and /n
    {author: 'Chnwe ELopez',     //dump the objects in the array
    body: 'Great stuff'},
    {author: 'Brian Efe',
    body: 'My daddy my daddy'}
  ],
  isLive: true
}

console.log(blogPost);

//Exercise5: Create a constructor function out of the blogPost. Imagine a scenario where 
//the a user is writing a post but has not published it yet

// properties - title, body, author, views, comments (author, body), isLive
// const post = {
//   title:title
// }

function BlogPost(title, body, author) {  //The fewer the parameters the easier it is to manage the function
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; //When a post is created, the views is zero by default
  this.comments = [];  //Same goes for the comment
  this.isLive = false; //Upon creation, the post is not yet live
}

let post = new BlogPost('a', 'b', 'c');

console.log(post);


//Exercise 6
// Visit yelp.com. Look at the pricing in $, $$, and $$$. Think of the properties you 
// can use to create a price range object to display different price ranges

//Whenever you want to create a list of objects, put them in an array
let priceRange = [
 {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
 {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
 {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
  {averagePerPerson: 5}
]


//ARRAYS
//Very important concepts to bear in mind are:
// 1. Adding new elements
// 2. Finding elements  
// 3. Removing elements
// 4. Splitting arrays
// 5. Combining arrays

//1. Adding Elements
const arrayNumbers = [3, 4];

// Arrays are objects. So, you can use the dot notation to look up the properties and methods defined in an array.
// You can add properties to an array in the following positions:
// End; Beginning; and Middle

//End
arrayNumbers.push(5, 6);  //Adds the elements to the end of the array

//Beginning
arrayNumbers.unshift(1, 2);  //Adds elements to the beginning of the array


//Middle
arrayNumbers.splice(2, 0, 'a', 'b'); //(start index, count, items to add)

console.log(arrayNumbers);


// 2. Finding Elements
// This depends on whether you are storing primitives or reference types in an array

//Primitives
const findElements = [1, 2, 3, 4, 1, 5];

// indexOf method. If the value exists, it's index is returned. If not, it is set to -1.
console.log(findElements.indexOf('a')); //This returns -1
console.log(findElements.indexOf(3)); //This returns 2

// lastIndexOf method. If the value exists, it's index is returned. If not, it is set to -1.
console.log(findElements.lastIndexOf(8)); //This returns -1
console.log(findElements.lastIndexOf(1)); //This returns 4

//To check if a given element exists in a given array
//Method 1
console.log(findElements.indexOf(2) !== -1); //This checks to see if 2 exists in the array. It returns trus.

//Method 2. Using the includes() method
console.log(findElements.includes(9)); //This is the modern method and it is way cleaner. It returns false.

//NOTE: All teh elements declared above have a second property called the starting index. If it is not specified, counts begins at index 0.
console.log(findElements.indexOf(3, 1)); //1 is the starting index. This returns 2


//REFERENCE TYPES
// The find() method is used to check if a given element exists in an array of objects. 
//This method takes a function called predicate or callback function'

const findArray = [
  {id: 1, name: 'Obinna'},
  {id: 2, name: 'Che'}
];

const find = findArray.find(function(find) {      // Returns the object if found. If not, it returns undefined.
  return find.name === 'Obinna';
}); 

console.log(find);

const findIndx = findArray.findIndex(function(findIndx) {      // Returns the index of the object. If not, it returns -1.
  return findIndx.name === 'Obina';
});

console.log(findIndx); 


//ARROW FUNCTION
// This was introduced in ES6. When you have a callback function, you can use the arrow function instead

const moore = findArray.find( moore => moore.name === 'Obinna'); //If no parameter, pass ()

console.log(moore); 


//REMOVING ELEMENTS
// We can remove elements from the end, beginning, and anywhere in the middle

const remove = [1, 2, 3, 4, 5];
console.log(remove);
//End
const removeEnd = remove.pop();
console.log(removeEnd); // Removes 5 from the array

//Beginning 
const removeBeginning = remove.shift(); // REmoves 1 from the array
console.log(removeBeginning); 

//Middle
const removeMiddle = remove.splice(2, 1)  // 2 represents the index, 1 represents the number of elements to be removed
console.log(removeMiddle); // Removes the element 4


//EMPTYING AN ARRAY ie removing all the elements of an array
//There are four ways of doing this

const emptyingArray = [1, 2, 3, 4];
const emptyingArray2 = emptyingArray; //This is supposed to hold the value [1, 2, 3, 4]

//Solution 1
emptyingArray = []; // This will only work if let was used instead of const to initialize the array







