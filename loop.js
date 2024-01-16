var res = 0;
for (let i = 0; i < 10; i++) {
	res += 1;
	console.log(res);
}

var array = [34, 35, 65, 34, 2, 1, 75];
for (let i = 0; i < array.length; i++) {
	array[i] += 1;
	console.log(array);
}

const names = ["Niklas", "Henrik", "Erik", "Sofia"];
for (let name of names) {
	console.log(name);
}

let x = 1;

while (x < 100) {
	console.log(x);
	x *= 2;
}

let b = 1;

do {
	b *= 2;
	console.log(b);
} while (b < 100);

for (variable in object) {
	// code to be executec in each iteration
}
