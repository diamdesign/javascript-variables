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
