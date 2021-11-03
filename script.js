//**
//  * Program that asks the user for numbers
//  * until a zero is entered
//  * and then shows sum of all the numbers
//  */


/*var numbers = [];

while (true) {
	// prompt always returns as text
	var currentNumberAsText = prompt("Give me another number or zero to finish");
	var currentNumber = parseInt(currentNumberAsText, 10);

	if (currentNumber === 0) {
		break;
	}

	numbers.push(currentNumber);
}

var numberToFindAsText = prompt("What number do you want to find?");
var numberToFind = parseInt(numberToFindAsText, 10);

var position = numbers.indexOf(numberToFind);

if (position >= 0) {
	console.log("The element is in array under index " + position);
} else {
	console.log("The element is not present in the array");
}

var sum = 0;
numbers.forEach(function (currentNumber) {
	sum = sum + currentNumber;
});

console.log(sum);
*/


/*
==========
HomeWork
==========
*/

/* My first JS function*/
console.log("This is first exercise");
function sum3(a, b, c) {
	return a + b + c;
}

console.log(sum3(22, 14, 15));
/* My first JS loop */

/*For loop */
console.log("Write a program that will output numbers from 10 to 20");
for (var i = 10; i <= 20; i++) {
	console.log(i);
}


/* While loop*/
let k = 10;

while (k <= 20) {
	console.log(k);
	k++;
}

/* Do while loop*/

let l = 10;
do {
	console.log(l);
	l++;
}
while (l <= 20);

/*Modifying numbers so it will output even numbers*/
console.log("Modifying numbers so it will output even numbers");
let y = 10;

while (y <= 20) {
	console.log(y);
	y += 2;
}
// Modify your code again, so that it becomes a function with two arguments, determining range of numbers to output (from a to b).
console.log("Modify your code again, so that it becomes a function with two arguments.");
function numbers(k, a) {
	for (var i = k; i <= a; i += 2) {
		console.log(i);
	}
}

numbers(100, 110);


/* Creating JS Arrays*/
console.log("Create an array, containing 10 numbers.");

var kristo = [3, 4, 5, 6, 7, 8, 9, 19, 16, 12];

console.log(kristo);
kristo.pop();
console.log(kristo);
kristo.push(2);
console.log(kristo);
kristo.splice(1, 1, 0);
console.log(kristo);

for (var i = 0; i < kristo.length; i += 3) {
	kristo[i] = 1;
}
console.log(kristo);



/* My first algorithm */
console.log("First algorithm.");

function algorithm2(a, b) {
	var x = 1;
	var k = 1;
	while (x <= b) {
		k *= a;
		x++;
	}
	return k;
}

console.log(algorithm2(5, 2));
console.log(algorithm2(5, 4));
console.log(algorithm2(6, 0));
console.log(algorithm2(8, 1));