/* 
var age = 41;
console.log("This is my age:", age);

const firstName = "Fredrik";
let lastName = "Berglund";
var title = "Master";

console.log(title);
console.log(firstName);
console.log(lastName);
console.log(title, firstName, lastName);

var name = "Fredrik Gustafsson";
name = "Fredrik Berglund";
console.log(name);

let number1 = 42;
let number2 = 128;
var result = number1 + number2;
console.log(result);

var result1 = number2 - number1;
var result2 = number1 * number2;
var result3 = number2 / number1;
console.log(result1);
console.log(result2);
console.log(result3);

var b = 42;
console.log(b);
b += 5;
console.log(b);

let a = 10;
a = a - 4;
a = 7;
a = a + 2;

console.log(a); // a = 9

function getAverage(array, num) {
	var number = 0;
	var average = 0;

	if (Array.isArray(array)) {
		for (var i = 0; i < array.length; i++) {
			number += array[i];
		}
		average = number / array.length;
	} else {
		average = (number + num) / 2;
	}

	return average;
}

var array = [12, 14, 23, 53, 43, 1, 4, 6, 7];
var results = getAverage(array);
console.log(results);
*/

/*
let nam = prompt("What is your name?");
function greetings(username) {
	alert("Hello there my friend! You must be " + username);
}
greetings(nam);
*/

/*
function returnSum(num1, num2) {
	let result = num1 + num2;
	return result;
}

const sum = returnSum(5, 5);
console.log(sum);
*/

/*
function division(num1, num2) {
	if (num1 === 0 || num2 === 0) {
		console.error("Can't divide with 0");
		return;
	}
	let sum = num1 / num2;
	return sum;
}

const sum = division(4, 2);
console.log(sum);
*/

/*
function area(width, length) {
	let ar = width * length;
	let area = ar + "m2";
	return area;
}

const sum = area(10, 14);
console.log(sum);
*/

/*
function hello(firstName, lastName) {
	let temp = "Hello " + firstName + " " + lastName + "! How are you doing?";
	return temp;
}

const sum = hello("Fredrik", "Berglund");
console.log(sum);
*/

/*
function km2miles(km) {
	let result = km * 0.6214;
	return result;
}
const sum = km2miles(5);
console.log(sum);
*/

/*
function c2f(c) {
	let result = c * (9 / 5) + 32;
	return result;
}
const sum = c2f(5);
console.log(sum);
*/

/*
let avgArr = [4, 23, 43, 54, 346, 74, 4];

function avg(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let result = sum / array.length;
	return result;
}

const sum = avg(avgArr);
console.log(sum);
*/

/*
function checkAge(age) {
	let result = "";
	if (age > 0 && age <= 14) {
		result = "Get out of here!";
	} else if (age >= 15 && age <= 17) {
		result = "Sorry you are not old enough";
	} else if (age >= 18 && age <= 19) {
		result =
			"Sorry you must be atleast 20. Why dont you try a bar instead?";
	} else if (age >= 20 && age < 80) {
		result = "Thank you! Welcome!";
	} else if (age >= 80) {
		result = "I'm sorry, where is your caretaker?";
	}
	return result;
}

const sum = checkAge(15);
console.log(sum);
*/

/*
let someArray = [
	56, 48, 48, 64, 464, 261, 2648, 154, 154, 454, 684, 26, 6468, 145, 1554,
];
function summary(array) {
	let sum = 0;
	for (let i = 0; i < someArray.length; i++) {
		sum += array[i];
	}
	return sum;
}
const sum = summary(someArray);
console.log(sum);
*/

/*
var person = {
	name: "Fredrik Berglund",
	age: 42,
	city: "Mariestad",
	skills: [
		"Pokemon Master",
		"Kung Fu Ledgend",
		"Fotboll Ninja",
		"Super Kock",
		"Kung HTML kodare",
	],
};

function showSkills(person) {
	let skills = "";
	for (let i = 0; i < person.skills.length; i++) {
		console.log(person.skills[i]);
		skills += person.skills[i] + ", ";
	}
	return skills;
}

let sum = showSkills(person);
console.log(sum);
*/

// Öva på med Objekt
/*
const person = {
  name: "John Doe",
  age: 25,
  city: "New York",
};

console.log("Person's name:", person.name);
console.log("Person's age:", person.age);
console.log("Person's city:", person.city);

person.age = 26;
person.email = "john.doe@example.com";

const car = {
  make: "Toyota",
  model: "Camry",
  displayDetails: function () {
    console.log(`Car: ${this.make} ${this.model}`);
  },
};

for (let property in person) {
  console.log(`Property: ${property}, Value: ${person[property]}`);
}

const student = {
  name: "Alice",
  grades: {
    math: 90,
    science: 85,
    history: 95,
  },
};

student.grades.science = 88;

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

for (let book of books) {
  console.log(`Book Title: ${book.title}, Author: ${book.author}`);
}
*/

// Arrays och loops
/*
let array1 = [];
array1.push("apple", 42, true, { key: "value" });
console.log("Task 1:", array1);

let array2 = [2, 5, 8, 11];
for (let i = 0; i < array2.length; i++) {
  array2[i] *= 3;
}
console.log("Task 2:", array2);

let array3 = [3, 8, 1, 6, 10, 2];
let newArray3 = [];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] > 5) {
    newArray3.push(array3[i]);
  }
}
console.log("Task 3:", newArray3);

let array4 = [7, 14, 22, 30, 45];
let sum = 0;
for (let i = 0; i < array4.length; i++) {
  sum += array4[i];
}
console.log("Task 4:", sum);

let array5 = ["apple", "banana", "orange", "grape"];
let searchElement = "orange";
for (let i = 0; i < array5.length; i++) {
  if (array5[i] === searchElement) {
    console.log("Task 5:", searchElement, "found at index", i);
    break; // Stop the loop once the element is found
  }
}

let array6 = [3, 7, 11, 15, 19];
array6.length--; // Remove the last element
console.log("Task 6:", array6);

let array7 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let maxNumber = array7[0];
for (let i = 1; i < array7.length; i++) {
  if (array7[i] > maxNumber) {
    maxNumber = array7[i];
  }
}
console.log("Task 7:", "The biggest number is", maxNumber);

let array8 = ["dog", "cat", "bird"];
let newArray8 = [];
for (let i = 0; i < array8.length; i++) {
  newArray8.push(array8[i]);
}
console.log("Task 8:", newArray8);

let array9 = [1, 2, 3, 4, 5];
for (let i = array9.length - 1; i >= 0; i--) {
  array9.splice(i, 1);
}
console.log("Task 9:", array9);
*/

// Arrays
/*
const numbers = [2, 6, 12, 7, 22, 35];

const firstElement = numbers[0];
console.log("Task 1:", firstElement);

const lastElement = numbers[numbers.length - 1];
console.log("Task 2:", lastElement);

const fourthElement = numbers[3];
console.log("Task 3:", fourthElement);

const secondElement = numbers[1];
const fifthElement = numbers[4];
const newArray = [secondElement, fifthElement];
console.log("Task 4:", newArray);

const arrayLength = numbers.length;
console.log("Task 5:", arrayLength);

const addedNumberEnd = numbers.push(42);
console.log(
	"Task 6:",
	addedNumberEnd,
	"This number represents the new length of the array."
);

const addedNumberStart = numbers.unshift(99);
console.log(
	"Task 7:",
	addedNumberStart,
	"This number represents the new length of the array."
);

const removedNumberEnd = numbers.pop();
console.log(
	"Task 8:",
	removedNumberEnd,
	"This number represents the removed element from the end."
);

const removedNumberStart = numbers.shift();
console.log(
	"Task 9:",
	removedNumberStart,
	"This number represents the removed element from the start."
);

console.log("Task 10:", numbers);
*/
