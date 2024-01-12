// 1. Correct the color of the logo.
const logoText = document.querySelector(".logo-text");
logoText.style.color = "#000";
console.log(logoText);

// 2. Correct the alignment along the x-axis
// 3. Correct the color of the border at the bottom of the header element
const header = document.querySelector("header");
header.style.justifyContent = "flex-start";
header.style.borderBottom = "1px solid lightgray";
console.log(header);

// 4. Correct the content of the Recipe Name
// const recipeName = document.querySelector("#recipe-name");
const recipeName = document.getElementById("recipe-name");
// recipeName.textContent = "Frozen Cheescake";
console.log(recipeName);

// 5. Add a class to the element in order for the icon to be displayed correctly, and fix the time
const timeContainer = document.querySelector(".time-container");
const icon = timeContainer.firstChild;
icon.classList.add("material-icons");
console.timeContainer;
console.log(icon);

// 6. Change the image
const article = document.querySelector(".image-container");
const img = article.firstElementChild;
console.log(img.getAttribute("src"));
img.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");
console.log(article);
console.log(img);

// 7. Change background-color
const ingredientsContainer = document.querySelector(".ingredients-container");
console.log(ingredientsContainer);
ingredientsContainer.style.backgroundColor = "#f9f9f9";

// 8. Change the innerHTML
const bottomList = document.querySelector(".ingredients-list-bottom");
console.log(bottomList);
bottomList.innerHTML = "<li>15st digistivetex</li><li>Lite smör</li>";

// 9. Change a specific li tag inside the list
const pasteList = document.querySelector(".ingredients-list-paste");
console.log(pasteList);
const wrongLi =
	pasteList.firstElementChild.nextElementSibling.nextElementSibling;
console.log(wrongLi);
wrongLi.textContent = "3tsk vaniljsocker";
for (let li of pasteList.children) {
	if (li.textContent === "1dl lakrispulver") {
		li.textContent = "3tsk vaniljsocker";
	}
}

// 10. Insert the missing li tag in the end
pasteList.insertAdjacentHTML(
	"beforeend",
	"<li>400g naturell philadelphiaost</li>"
);

// 11. Remove class
const instructions = document.querySelector(".instructions");
console.log(instructions);
instructions.classList.remove("shadow");

// 12. change two elements in the list
const instructionsList = document.querySelector(".instructions-list");
console.log(instructionsList);
const elements = instructionsList.children;
console.log(elements);
elements[2].textContent =
	"Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner på bunken utan att det rör sig.";
elements[8].textContent = "Ställ in i frysen över natten.";

const p = document.querySelector(".description");
console.log(p.style);
