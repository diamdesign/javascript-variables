class School {
	constructor(name, adress, zipcode, city) {
		this.name = name;
		this.adress = adress;
		this.zipcode = zipcode;
		this.city = city;
		this.students = [];
		this.teachers = [];
	}
}

class Subject {
	constructor(name) {
		this.name = name;
		this.students = [];
		this.teachers = [];
	}
}

class Students {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.subjects = [];
	}
}

class Teachers {
	constructor(name) {
		this.name = name;
		this.subjects = [];
	}
}

const teacherNiklas = new Teachers("Niklas");
console.log(teacherNiklas.name);
