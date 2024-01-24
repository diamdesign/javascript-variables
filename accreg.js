document.addEventListener("DOMContentLoaded", () => {
	const label = document.querySelectorAll("label");
	label.forEach((lab) => {
		lab.addEventListener("click", (e) => {
			const clickedLabel = e.currentTarget;
			const nextElement = clickedLabel.nextElementSibling;

			if (nextElement) {
				nextElement.focus();
			}
		});
	});

	const nameInput = document.querySelector("#name");
	const userInput = document.querySelector("#username");
	const emailInput = document.querySelector("#email");
	const passwordInput = document.querySelector("#password");
	const confirmInput = document.querySelector("#confirm");
	const submit = document.querySelector("#submit");
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		const elements = document.querySelectorAll("input");
		for (let i = 0; i < elements.length; i++) {
			if (
				elements[i].value === "" ||
				elements[i].value === null ||
				elements[i].value === undefined
			) {
				console.log("Must fill in all inputs.");
				alert("Must fill in all input fields.");
				return;
			}
		}

		if (passwordInput < 8) {
			console.log("Password is less than 8 char.");
			alert("Password is less than 8 characters.");
			return;
		}

		if (passwordInput.value !== confirmInput.value) {
			console.log("Password and Confirm is not equal.");
			alert("Password and Confirm is not equal.");
			passwordInput.style.outlineColor = "red";
			confirmInput.style.outlineColor = "red";
			return;
		} else {
			passwordInput.style.outlineColor = "black";
			confirmInput.style.outlineColor = "black";
		}

		const registrationData = {
			name: nameInput.value,
			username: userInput.value,
			email: emailInput.value,
			password: passwordInput.value,
		};
		console.log(registrationData);
		alert(JSON.stringify(registrationData, null, 2));
	});

	function stylePassword(inputElement) {
		let result = inputElement.value;
		console.log(result.length);
		if (result.length < 8) {
			inputElement.style.outlineColor = "red";
			submit.disabled = true;
		} else {
			inputElement.style.outlineColor = "black";
			submit.disabled = false;
		}
	}
	passwordInput.addEventListener("keydown", () => {
		stylePassword(passwordInput);
	});
	confirmInput.addEventListener("keydown", () => {
		stylePassword(confirmInput);
	});
});
