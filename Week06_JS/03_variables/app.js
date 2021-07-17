var myName = "Ioana";
console.log(myName);
console.log('myName');

var x = 10;
console.log(x);

// naming convention --> camel case 
var myFirstNumber = 25;
console.log(myFirstNumber);

// not recommended for js variables
var my_fist_name = 25 // c/c++ convention

// Data types
// Numbers
var myNumber = 25;
var myFloatNumber = 25.6;

console.log(myNumber, myFloatNumber);

// Primul meu numar este 25
console.log('Primul meu numar este', myNumber);

// Arrays
var myNumbers = [1, 2, 3, 4, 5, 6];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(myNumbers[0]);

// myNumbers[3] = ?
console.log('myNumbers[3] = ', myNumbers[3]);

// String
console.log('Costel');
var secondName = ["C", "o", "s", "t", "e", "l"];
console.log(secondName);
var stringSecondName = 'Costel';
console.log(stringSecondName.length);
console.log(stringSecondName[1]);

// Boolean
var isTrue = false;
isTrue = 4 > 5;
console.log('isTrue = ', isTrue);

// Object
var person = {nume: "costel", varsta: 25, anulNasterii: 1997};
console.log(person);
console.log(person.nume);
console.log(person.varsta);