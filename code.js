// helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

// helloWorld expression
const helloWorld = function() {
    return 'Hello, World!';
}
helloWorld();

// foo function
function foo() {
	return 2;
}

// EXERCISE 1-5
// const sayHello = function(input) {
// 	if(input === 'Alex') {
// 		return 'Hello, Alex!';
// 	} else if(input === 'Pat') {
// 		return 'Hello, Pat!';
// 	} else {
// 		return 'Hello, Jane!';
// 	}
// }
// sayHello('Alex');

// EXERCISE 6-8
const sayHello = function(input) {
	if(typeof input !== 'string' || input === '') {
		return 'Hello, World!';
	} else {
		return "Hello, " + input + "!";
	}
}
sayHello();

// EXERCISE 9 GIT COMMIT

// EXERCISE 10
function isFive (input) {
	return input == 5;
}

// EXERCISE 11
// parseFloat takes in a string and returns a number
function isEven (number) {
	return parseFloat(number) % 2 === 0;
}
