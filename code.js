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

// sayHello expression
const sayHello = function(input) {
	if(input === 'Alex') {
		return 'Hello, Alex!';
	} else if(input === 'Pat') {
		return 'Hello, Pat!';
	} else {
		return 'Hello, Jane!';
	}
}
sayHello('Alex');
