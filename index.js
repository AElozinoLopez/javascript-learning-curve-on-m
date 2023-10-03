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