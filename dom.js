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

let imageObject = {
	url: imageLink,
	height: imageHeight,
	width: imageWidth,
};

console.log("The name of the recipe is:", repName);
console.log("The name of the HTML ID is:", repNameId);
console.log("Font size:", fontSize);
console.log("Image Alt:", imageAlt);

console.log(imageObject);
