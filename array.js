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
