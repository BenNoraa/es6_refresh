// CONST & LET
let name = "John";
let test;

name = "Jack";

const person = {
	name: "John",
	age: 33
};

person.name = "Jack";

const nums = [1, 2, 3, 4];
nums.push(5);

// ARROW FUNCIONS

// Old way
// function sayHello() {
// 	console.log("Hello");
// }

// New way
// name usually requires (name) but not if it's the only param.
const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Aaron");

const fruits = ["Apples", "Oranges", "Grapes"];

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit));

// MAP
// works in similar way to FOREACH but returns an array where you can change each item
// in the array however you want
// typically used to loop through Lists
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER
// often used in state managers i.e., Redux or even Context API where you want to delete something from the State
// used a lot in React b/c State is immutable and it can't be directly changed
const people = [
	{ id: 1, name: "Karen" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Sharon" }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
