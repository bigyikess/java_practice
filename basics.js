let myName = "Python";
myName = "JS";
const pup = 'woof' // constant, cannot be changed;
const pn = 'wahooooooooooo';
let lis = [1, 2, 3, 4, 5, 6];
let isHuman = true;


console.log(myName);

let a = 5 + 6 * 9;
let b = 89 % 67;
let c = 90 / 2;
let d = 2 ** 90;
console.log(a, b, c, d);

let e = Math.random();
let f = Math.round(e);
let g = Math.cos(Math.PI);
let h = Math.E ** 12

console.log(e, f, g, h)

let firstName = "Andrew";
let lastName = "Tay";
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length = " + nameLength);

let language = "Javascript";
console.log(language[0]);
console.log(language.substring(2, 5));
console.log(language.toUpperCase());

// if ... else ...
let age = 20;

if (age <= 12) {
    console.log("Hello kid!");
}
else if (age <= 18) {
    console.log("Hello teen!");
}
else {
    console.log("Hello adult!");
}

// For loop
let fruits = ["orange", "apple", "pear", "watermelon"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}

console.log("Happy New Year!")

// Object (like dictionaries in Python)
let person = {
    name: "Jim",
    age: 67,
    isStudent: true
}

console.log(person["name"])
console.log(person.name)

// Functions
function cube(x) {
    return x ** 3;
}

console.log(cube(123));
