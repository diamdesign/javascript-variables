function greet() {
	alert("Hello there my friend!");
}

// greet();

function greetings(name = "John") {
	console.log(`Hello there my friend! You must be ${name}`);
}

// greetings("Fredrik");

const add = (a, b) => a + b;
const result = add(2, 2);
console.log(result);

const divide = (a, b) => {
	if (a === 0 || b === 0) {
		console.log("Can't divide with 0");
		return;
	}
	let result = a / b;
	return result;
};
const resultdivide = divide(10, 2);
console.log(resultdivide);

const area = (x, y) => x * y;
const resultarea = area(10, 5);
console.log(resultarea + "m2");

function fullGreet(firstName = "John", lastName = "Doe") {
	console.log(`Hello ${firstName} ${lastName}! How are you doing?`);
}
// fullGreet();

const km2miles = (km) => km * 0.62137119;
const resultmiles = km2miles(10);
console.log(resultmiles);

const c2f = (c) => (c * 9) / 5 + 32;
const resultfar = c2f(20);
console.log(resultfar);

const avgArray = [1, 2, 4, 5, 42, 43, 62, 234, 26, 234, 2, 34, 6, 5];
const avg = (array) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i];
	}
	let final = result / array.length;
	return final;
};
const resultavg = avg(avgArray);
console.log(resultavg);

const fullAdd = (array) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
};
const resultfull = fullAdd(avgArray);
console.log(resultfull);

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
