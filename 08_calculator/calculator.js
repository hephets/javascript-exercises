const add = function(a,b) {
	return (a + b)
};

const subtract = function(a,b) {
	return (a - b)
};

const sum = function(arrayX) {
	let sum = 0;
	for (i in arrayX) {
		sum += i;
	} 
	return sum
};

const multiply = function(a,b) {
	return (a * b)
};

const power = function(a,b) {
	return (a ** b)
};

const factorial = function(f) {
	let product = 1
	for (let i=1; i<=f; i++) {
		product *= i;
	} 
	return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
