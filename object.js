const car = {
	model: "Honda",
	driver: "Fred",
	start: function () {
		console.log("The car is running");
	},
};

car.start();

const carModel = car.model;
const carModel2 = car["model"];

console.log(carModel, carModel2);

Object.freeze(car.model);

Object.seal(car);
