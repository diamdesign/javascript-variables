const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Remove last
array.pop();
console.log(array);

// Insert after
array.push(10);
console.log(array);

// Remove first
array.shift();
console.log(array);

// Insert before
array.unshift(1);
console.log(array);

// Change values
array[0] = 10;
console.log(array);
array[9] = 1;
console.log(array);

array[0] = 1;
console.log(array);
array[9] = 10;
console.log(array);

// Reverse order
array.reverse();
console.log(array);

// Sort
array.sort();
console.log(array);

const letters = ["a", "b", "c"];
const numb = [1, 2, 3];
const arr = letters.concat(numb);
console.log(arr);

const ages = [5, 10, 19, 25, 12, 34, 2];
const filterAges = ages.filter((age) => {
	if (age < 18) {
		return false;
	}
	return true;
});
console.log(filterAges);

const filteredAges = ages.filter((age) => age > 18);
console.log(filteredAges);

const correctedAge = ages.find((age) => {
	if (age === 10) {
		return true;
	}
	return false;
});
console.log(correctedAge);
const correctAge = ages.find((age) => age === 10);
console.log(correctAge);

const countries = ["Sweden", "Denmark", "Finland"];

countries.forEach((country) => {
	console.log(country);
});

const classNames = ["container", "bold", "shadow", "primary"];
const classNameAsString = classNames.join(" & ");
console.log(classNameAsString);

const numbersDoubled = ages.map((ages) => {
	const newNumber = ages * 2;
	return newNumber;
});
console.log(numbersDoubled);

const links = ["home", "about", "contact", "products"];
const aTags = links.map((link) => {
	const aTag = `<a href="${link}.html">${link}</a>`;
	return aTag;
});
console.log(aTags);

const letter = ["a", "b", "c", "d", "e", "f"];
const copy = letter.slice(1, 3);
console.log(copy);

const animals = ["tiger", "lion", "rubberduck", "bear"];
const removedElements = animals.splice(2, 1);
console.log(removedElements);

animals.splice(1, 0, "shark", "hedgehog", "moose");
console.log(animals);

// Array uppgifter
const numbers = [2, 6, 12, 7, 22, 35];

const firstElement = numbers[0];
console.log("1st Element:", firstElement);

const lastElement = numbers[numbers.length - 1];
console.log("Last Element:", lastElement);

const fourthElement = numbers[3];
console.log("4th Element:", fourthElement);

const secondElement = numbers[1];
const fifthElement = numbers[4];
const newArray = [secondElement, fifthElement];
console.log("New Array:", newArray);

const arrayLength = numbers.length;
console.log("Length of array:", arrayLength);

const addToEndResult = numbers.push(42);
console.log("Result of adding to the end:", addToEndResult);
console.log("Updated numbers array:", numbers);

const addToStartResult = numbers.unshift(99);
console.log("Result of adding to the start:", addToStartResult);
console.log("Updated numbers array:", numbers);

const removeFromEndResult = numbers.pop();
console.log("Result of removing from the end:", removeFromEndResult);
console.log("Updated numbers array:", numbers);

const removeFromStartResult = numbers.shift();
console.log("Result of removing from the start:", removeFromStartResult);
console.log("Updated numbers array:", numbers);

console.log("Original content of the array:", [2, 6, 12, 7, 22, 35]);
