// // Select all and use comment shortcut to activate all the code and examples

// /* CONST & LET */
// let name = "John";
// let test;

// name = "Jack";

// const person = {
// 	name: "John",
// 	age: 33
// };

// person.name = "Jack";

// const nums = [1, 2, 3, 4];
// nums.push(5);

// /* ARROW FUNCIONS */

// // Old way
// // function sayHello() {
// // 	console.log("Hello");
// // }

// // New way
// // name usually requires (name) but not if it's the only param.
// const sayHello = name => console.log(`Hello ${name}`);

// // sayHello("Aaron");

// const fruits = ["Apples", "Oranges", "Grapes"];

// /* FOREACH */
// fruits.forEach((fruit, index) => console.log(fruit));

// /* MAP */
// // works in similar way to FOREACH but returns an array where you can change each item
// // in the array however you want
// // typically used to loop through Lists
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// /* FILTER */
// // often used in state managers i.e., Redux or even Context API where you want to delete something from the State
// // used a lot in React b/c State is immutable and it can't be directly changed
// const people = [
// 	{ id: 1, name: "Karen" },
// 	{ id: 2, name: "Bob" },
// 	{ id: 3, name: "Sharon" }
// ];

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// /* SPREAD */
// // allows us to spread values out i.e., array elements or object properties
// const arr = [1, 2, 3];
// // make array copy and add 4 using the spread ... operator.
// const arr2 = [...arr, 4];
// console.log(arr2); // [1, 2. 3. 4]
// const arr3 = [arr2, 5];
// console.log(arr3); // [Array(4), 5]

// // example with person object
// const person1 = {
// 	name: "Brad",
// 	age: 36
// };
// // a copy that adds email using the spread ... operator
// const person2 = {
// 	...person1,
// 	email: "aaron@nomail.com"
// };

// console.log(person2);

// // combing SPREAD with FILTER
// const arr4 = [...arr.filter(num => num !== 2)];

// console.log(arr4);

// /* DESTRUCTURING */
// // used a lot to pull values out of objects and arrays
// const profile = {
// 	fullname: "John Doe",
// 	address: {
// 		street: "40 Main st",
// 		city: "Boston"
// 	},
// 	hobbies: ["movies", "music"]
// };

// // console.log(profile.fullname); // John Doe

// // assign a var with {}
// // think of this as sucking a name or whatever is between {} out of the profile object
// // const { fullname } = profile;
// // console.log(profile.fullname); // John Doe

// const { fullname, address, hobbies } = profile;
// console.log(fullname, address, hobbies[0]); // John Doe {street: "40 Main st", city: "Boston"} movies

// const { street, city } = profile.address;
// console.log(street, city); // 40 Main st Boston

// // the reason DESTRUCTURING is used so much in React is due to state management examples like below
// // this.state.profile;
// // this.props.name;

// /* CLASSES */
// // Classed contain properties and methods
// // properties are like attributes and methods are functions within a Class
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	// backticks ` ` means template literal
// 	greet() {
// 		return `Hello, my name is ${this.name} and I am ${this.age}`;
// 	}
// }

// const classperson1 = new Person("John", 33);
// const classperson2 = new Person("Sarah", 28);

// console.log(classperson1.greet()); // Hello, my name is John and I am 33
// console.log(classperson2.greet()); // Hello, my name is Sarah and I am 28

// /* SUBCLASSES */
// // used a lot in React because in React Components you need to extend to core React Component class
// // it will look like this React.Component which will provide a lot of lifecycle methods
// class Customer extends Person {
// 	constructor(name, age, balance) {
// 		super(name, age); // name and age are a part of the Parent Constructer
// 		this.balance = balance;
// 	}

// 	// method
// 	info() {
// 		return `${this.name} owes $${this.balance}.00`;
// 	}
// }

// const customer1 = new Customer("Kevin", 32, 300);

// console.log(customer1.info());

// /* MODULES */
// // webpack and babel often used in React for modules

// // file 1 (file1.js)
// // export allows us to import into another file such as file 2 below
// /* """""""""""""""""""""""""""""""" */
// export const fname = "Jeff";
// export const fnums = [1, 2, 3];
// export default Person;
// /* """""""""""""""""""""""""""""""" */
// // file 2 (file2.js)
// import { name } from "./file1";
// import Person from "./file1"; // {} braces are not needed here because it was exported as default (export default Person)

// console.log(fname); // Jeff
