/*
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

*/

let school = {
	name: "Lexicon",
	adress: "Gökarvägen 88",
	zipcode: "11851",
	city: "Stockholm",
	students: [],
	teachers: [],
	addStudent: addStudent,
	addTeacher: addTeacher,
	removeTeacher: removeTeacher,
	removeStudent: removeStudent,
};

let classes = [
	{
		name: "Math",
		students: [],
		teachers: [],
		addStudent: addStudent,
		addTeacher: addTeacher,
		removeTeacher: removeTeacher,
		removeStudent: removeStudent,
	},
	{
		name: "Art",
		students: [],
		teachers: [],
		addStudent: addStudent,
		addTeacher: addTeacher,
		removeTeacher: removeTeacher,
		removeStudent: removeStudent,
	},
	{
		name: "Frontend",
		students: [],
		teachers: [],
		addStudent: addStudent,
		addTeacher: addTeacher,
		removeTeacher: removeTeacher,
		removeStudent: removeStudent,
	},
];

let studentlist = [
	{
		name: "Niklas",
		age: "",
		gender: "Male",
		subjects: [],
		grades: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
		addGrade: addGrade,
	},
	{
		name: "Johan",
		age: "",
		gender: "Male",
		subjects: [],
		grades: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
		addGrade: addGrade,
	},
	{
		name: "Fredrik",
		age: "",
		gender: "Male",
		subjects: [],
		grades: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
		addGrade: addGrade,
	},
	{
		name: "Vincent",
		age: "",
		gender: "Male",
		subjects: [],
		grades: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
		addGrade: addGrade,
	},
	{
		name: "Fränich",
		age: "",
		gender: "Male",
		subjects: [],
		grades: [],
		addSubject: addSubject,
		addGrade: addGrade,
	},
];

let teachers = [
	{
		name: "Niklas",
		subjects: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
	},
	{
		name: "Sofia",
		subjects: [],
		addSubject: addSubject,
		removeSubject: removeSubject,
	},
];

let grades = [];

/*
teachers[0].subjects.push(classes[0].name);
classes[2].students.push(studentlist[2].name);
*/
console.log(teachers);
console.log(classes);

function getClassByName(className) {
	return classes.find((c) => c.name === className);
}

function getTeacherByName(teacherName) {
	return teachers.find((t) => t.name === teacherName);
}

function getStudentByName(studentName) {
	return studentlist.find((s) => s.name === studentName);
}

function addSubjectToTeacher(subjectName, teacherName) {
	const subject = getClassByName(subjectName);
	const teacher = getTeacherByName(teacherName);

	if (subject && teacher) {
		if (!teacher.subjects.includes(subject.name)) {
			teacher.subjects.push(subject.name);
			console.log(`Subject '${subject.name}' added to teacher '${teacherName}'.`);
		} else {
			console.log(`Subject '${subject.name}' already exists for teacher '${teacherName}'.`);
		}
	} else {
		console.log("Subject or teacher not found.");
	}
}

function addSubject(subjectName) {
	if (this.subjects) {
		if (!this.subjects.includes(subjectName)) {
			this.subjects.push(subjectName);
			console.log(`Subject '${subjectName}' added to ${this.name}.`);
		} else {
			console.log(`Subject '${subjectName}' already exists in ${this.name}.`);
		}
	} else {
		console.log("Student object does not have a 'subjects' property.");
	}
}

function addGrade(subject, grade) {
	// Find the student in studentlist
	const student = studentlist.find((s) => s.name === this.name);

	if (student) {
		// Add grade to the student's grades array
		student.grades.push({ class: subject, grade: grade });

		// Find the student in grades list
		const studentInGrades = grades.find((g) => g.name === this.name);

		if (studentInGrades) {
			// Update the grades array in grades list
			const existingGradeIndex = studentInGrades.grades.findIndex((g) => g.class === subject);

			if (existingGradeIndex !== -1) {
				// Update the existing grade
				studentInGrades.grades[existingGradeIndex].grade = grade;
			} else {
				// Add a new grade
				studentInGrades.grades.push({ class: subject, grade: grade });
			}
		} else {
			// If the student is not found in grades list, add a new entry
			grades.push({ name: this.name, grades: [{ class: subject, grade: grade }] });
		}

		console.log(`Grade '${grade}' added for subject '${subject}' for ${this.name}.`);
	} else {
		console.log(`Student '${this.name}' not found.`);
	}
}

function removeSubject(subjectName) {
	if (this.subjects) {
		const index = this.subjects.findIndex((subject) => subject.name === subjectName);
		if (index !== -1) {
			this.subjects.splice(index, 1);
			console.log(`Subject '${subjectName}' removed from ${this.name}.`);
		} else {
			console.log(`Subject '${subjectName}' does not exist in ${this.name}.`);
		}
	} else {
		console.log("Subject object does not have a 'subjects' property.");
	}
}

function removeStudent(studentName) {
	if (this.students) {
		const index = this.students.findIndex((student) => student.name === studentName);
		if (index !== -1) {
			this.students.splice(index, 1);
			console.log(`Student '${studentName}' removed from ${this.name}.`);
		} else {
			console.log(`Student '${studentName}' does not exist in ${this.name}.`);
		}
	} else {
		console.log("Student object does not have a 'students' property.");
	}
}

function removeTeacher(teacherName) {
	if (this.teachers) {
		const index = this.teachers.findIndex((teacher) => teacher.name === teacherName);
		if (index !== -1) {
			this.teachers.splice(index, 1);
			console.log(`Teacher '${teacherName}' removed from ${this.name}.`);
		} else {
			console.log(`Teacher '${teacherName}' does not exist in ${this.name}.`);
		}
	} else {
		console.log("Teacher object does not have a 'teachers' property.");
	}
}
function addStudent(studentName) {
	if (this.students) {
		const existingStudent = getStudentByName(studentName);

		if (existingStudent) {
			// Student already exists, copy the existing student object and insert it into the students array
			this.students.push({ ...existingStudent });
			console.log(`Student '${studentName}' added to ${this.name}.`);
		} else {
			console.log(`Student '${studentName}' not found in ${this.name}.`);
		}
	} else {
		console.log("Object does not have a 'students' property.");
	}
}
function addTeacher(teacherName) {
	const teacherObject = getTeacherByName(teacherName);

	if (teacherObject) {
		const existingTeacher = this.teachers.find((t) => t.name === teacherName);

		if (!existingTeacher) {
			this.teachers.push({ ...teacherObject });
			console.log(`Teacher '${teacherName}' added to ${this.name}.`);
		} else {
			console.log(`Teacher '${teacherName}' already exists in ${this.name}.`);
		}
	} else {
		console.log(`Teacher '${teacherName}' not found.`);
	}
}

function addClassToClasses(className) {
	if (!classes.find((c) => c.name === className)) {
		let newClass = {
			name: className,
			students: [],
			teachers: [],
			addStudent: addStudent,
			addTeacher: addTeacher,
			removeTeacher: removeTeacher,
			removeStudent: removeStudent,
		};

		classes.push(newClass);
		console.log(`Class '${className}' added to Classes.`);
	} else {
		console.log(`Class '${className}' already exists.`);
	}
}

function addStudentToStudents(studentName, studentAge = "", studentGender = "") {
	if (!studentlist.find((s) => s.name === studentName)) {
		let newStudent = {
			name: studentName,
			age: studentAge,
			gender: studentGender,
			subjects: [],
			grades: [],
			addSubject: addSubject,
			removeSubject: removeSubject,
		};

		studentlist.push(newStudent);
		console.log(`Student '${studentName}' added to Students.`);
	} else {
		console.log(`Student '${studentName}' already exists.`);
	}
}

function addTeacherToTeachers(teacherName, teacherAge = "", teacherGender = "") {
	if (!teachers.find((t) => t.name === teacherName)) {
		let newTeacher = {
			name: teacherName,
			age: teacherAge,
			gender: teacherGender,
			subjects: [],
			addSubject: addSubject,
			removeSubject: removeSubject,
		};

		teachers.push(newTeacher);
		console.log(`Teacher '${teacherName}' added to Teachers.`);
	} else {
		console.log(`Teacher '${teacherName}' already exists.`);
	}
}

function fireTeacher(teacherName) {
	for (let i = 0; i < classes.length; i++) {
		classes[i].removeTeacher(teacherName);
	}
	let teacher = teachers.findIndex((teacher) => teacher.name === teacherName);

	if (teacher !== -1) {
		teachers.splice(teacher, 1);
		console.log(`Teacher '${teacherName}' is removed from Teachers.`);
	} else {
		console.log(`Teacher '${teacherName}' was not found in Teachers.`);
	}
	school.removeTeacher(teacherName);
	console.log(`Teacher '${teacherName}' is fired and removed from the school.`);
}

function relegateStudent(studentName) {
	for (let i = 0; i < classes.length; i++) {
		classes[i].removeStudent(studentName);
	}
	let student = studentlist.findIndex((studentlist) => studentlist.name === studentName);

	if (student !== -1) {
		studentlist.splice(student, 1);
		console.log(`Student '${studentName}' is removed from Students.`);
	} else {
		console.log(`Student '${studentName}' was not found in Students.`);
	}
	school.removeStudent(studentName);
	console.log(`Student '${studentName}' is relegated and removed from the school.`);
}

function displayAllStudents() {
	studentlist.forEach((student) => {
		console.log(`Student: ${student.name}`);
		Object.entries(student).forEach(([key, value]) => {
			if (typeof value !== "function") {
				console.log(`${key}: ${value}`);
			}
		});
		console.log("----------------------");
	});
}

function displayAllTeachers() {
	teachers.forEach((teacher) => {
		console.log(`Teacher: ${teacher.name}`);
		Object.entries(teacher).forEach(([key, value]) => {
			if (typeof value !== "function") {
				console.log(`${key}: ${value}`);
			}
		});
		console.log("----------------------");
	});
}

function displayClass(className) {
	const classObj = classes.find((classObj) => classObj.name === className);

	if (classObj) {
		console.log(`Class: ${classObj.name}`);

		console.log("Students:");
		classObj.students.forEach((student) => {
			console.log(`  ${student.name}`);
		});

		console.log("Teachers:");
		classObj.teachers.forEach((teacher) => {
			console.log(`  ${teacher.name}`);
		});

		console.log("----------------------");
	} else {
		console.log(`Class '${className}' not found.`);
	}
}

function displayStudentGrades(studentName) {
	const student = studentlist.find((s) => s.name === studentName);

	if (student) {
		console.log(`Grades for ${studentName}:`);
		student.grades.forEach((grade) => {
			console.log(`  ${grade.class}: ${grade.grade}`);
		});
		console.log("----------------------");
	} else {
		console.log(`Student '${studentName}' not found.`);
	}
}

function displayGrades(subject) {
	const gradesForSubject = grades.filter((g) =>
		g.grades.some((grade) => grade.class === subject)
	);

	if (gradesForSubject.length > 0) {
		console.log(`Grades for ${subject}:`);
		gradesForSubject.forEach((student) => {
			const studentGrade = student.grades.find((grade) => grade.class === subject);
			console.log(`  ${student.name}: ${studentGrade.grade}`);
		});
		console.log("----------------------");
	} else {
		console.log(`No grades found for subject '${subject}'.`);
	}
}

let teacherNiklas = teachers[0];
let teacherSofia = teachers[1];

let studentNiklas = studentlist[0];
let studentJohan = studentlist[1];
let studentFredrik = studentlist[2];

let classMath = classes[0];
let classArt = classes[1];
let classFrontend = classes[2];

/*
addSubjectToTeacher("Math", "Niklas");
addSubjectToTeacher("Math", "Niklas");
*/
teacherNiklas.addSubject("Frontend");
classFrontend.addTeacher("Niklas");
classFrontend.addTeacher("Sofia");
classFrontend.addStudent("Johan");
classFrontend.addStudent("Vincent");
addTeacherToTeachers("Johan");
addStudentToStudents("Lars");
addClassToClasses("Gymnastics");
classMath.addTeacher("Johan");
classMath.addStudent("Fredrik");
classMath.addStudent("Johan");
studentFredrik.addSubject("Frontend");
studentFredrik.addSubject("Math");
studentJohan.addSubject("Frontend");

for (let i = 0; i < studentlist.length; i++) {
	let name = studentlist[i].name;
	school.addStudent(name);
}

for (let i = 0; i < teachers.length; i++) {
	let name = teachers[i].name;
	school.addTeacher(name);
}

fireTeacher("Niklas");
relegateStudent("Johan");
addStudentToStudents("Johan");
addTeacherToTeachers("Niklas");
school.addTeacher("Niklas");
teacherNiklas = teachers[2];
teacherNiklas.addSubject("Frontend");
teacherSofia.addSubject("Frontend");
teacherNiklas.addSubject("Gymnastics");
classFrontend.addTeacher("Niklas");

studentFredrik.addGrade("Math", "B");
studentFredrik.addGrade("Frontend", "A");
studentNiklas.addGrade("Math", "C");
studentNiklas.addGrade("Frontend", "A");

console.log(school);
console.log(teachers);
console.log(classes);

displayAllStudents();
displayAllTeachers();

displayClass("Frontend");

displayStudentGrades("Fredrik");
displayGrades("Math");
