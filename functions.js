
// Named function
function sayHello(greeting, name = 'World'){
    return `${greeting} ${name}!`;
}

console.log(sayHello('Hi'));

// Anynomous function

var add = function (num1, num2) {
    return num1 + num2;
};

console.log(add(1, 5));

// Arrow function

var multiply = (num1, num2) => {
    return num1 * num2
};

var greet = name => `Hello ${name}`


console.log(greet('Leszek'));
console.log(multiply(2, 3));

// 1) Declare a named function that takes an array of numbers, 
// and returns the sum, or total, of all of the numbers in the array.

// 2) Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'

// // Your function should return true if the given string is a key 
// on the given object and false if the object does not have a key 
// that matches the string. Store this function in an appropriately 
// named variable to invoke it.

var myArray = [1, 2, 3, 4, 5]

var sum = function(array) {
    var total = 0;

    for (var number of array) {
        total += number
    }
    return total
}

console.log(mySum())

var myObj = {
    name: "Wojtek",
    age: 30
};

var myStr = "name";
var anotherStr = 'string'


var isKeyequalStr = function (obj, str) {

    for(var key in obj) {

        if (key === str) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(isKeyequalStr( myObj, myStr ));
console.log(isKeyequalStr( myObj, anotherStr ));
