let max = 77;
let min = 73;
let optimal = 75;

function c2f(c) {
	let result = c * (9 / 5) + 32;
	return result;
}
const sumC = c2f(optimal);
console.log(sumC);

function f2c(f) {
	let res = (f - 32) / 1.8;
	let result = Math.floor(res);
	return result;
}
const sumF = f2c(167);
console.log(sumF);

var tempCelcius = 0;

var tempIn = parseInt(prompt("Set your desired temperature in Fahrenheit"));

tempCelcius = f2c(tempIn);
console.log(tempIn, tempCelcius);

while (tempCelcius < min || tempCelcius > max) {
	if (tempCelcius < min) {
		tempIn = parseInt(
			prompt(
				tempCelcius +
					"c (" +
					tempIn +
					"f). It's too cold, enter new temperature."
			)
		);
	} else if (tempCelcius > max) {
		tempIn = parseInt(
			prompt(
				tempCelcius +
					"c (" +
					tempIn +
					"f). It's too hot, enter new temperature."
			)
		);
	}
	tempCelcius = f2c(tempIn);
}
console.log(tempIn, tempCelcius);

if (tempCelcius === optimal) {
	alert(
		"You have selected optimal temperature. " +
			tempCelcius +
			"c (" +
			tempIn +
			"f)."
	);
} else if (tempCelcius >= min && tempCelcius <= max) {
	alert(
		"You have selected a suitable temperature. " +
			tempCelcius +
			"c (" +
			tempIn +
			"f)."
	);
}
