const repNameHTML = document.getElementById("recipe-name");
const repNameId = repNameHTML.getAttribute("id");
const repName = repNameHTML.textContent;

const fontSizeTag = document.querySelector(".description");
const computedStyle = window.getComputedStyle(fontSizeTag);
const fontSize = computedStyle.getPropertyValue("font-size");

const imageElement = document.querySelector(".image-container img");
const imageAlt = imageElement.alt;
const imageLink = imageElement.src;
const imageHeight = imageElement.height;
const imageWidth = imageElement.width;

const ingredientHTML = document.querySelector(".ingredients-list-paste");
const ingredientsLi = ingredientHTML.querySelectorAll("li");
const ingredients4 = ingredientsLi[4].textContent;
const ingredientsNum = ingredientsLi.length;

const instructionHTML = document
	.querySelector(".instructions-list")
	.querySelectorAll("li");

var instructions = [];
let insCount = 0;
for (let i = 0; i < instructionHTML.length; i++) {
	insCount++;
	let text = instructionHTML[i].textContent.trim().replace(/\s+/g, " ");

	instructions.push({ order: insCount, text: text });
}

let imageObject = {
	url: imageLink,
	height: imageHeight,
	width: imageWidth,
};

console.log("The name of the recipe is:", repName);
console.log("The name of the HTML ID is:", repNameId);
console.log("Font size:", fontSize);
console.log("Image Alt:", imageAlt);

console.log("Image objects:", imageObject);

console.log("The paste has " + ingredientsNum + " ingredients.");
console.log("The 4th ingredient is", ingredients4);

console.log("Instructions Array Object:", instructions);
