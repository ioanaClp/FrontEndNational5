// create an object of 5 p -> name, age -> sort by age
let persons = [
    { name: 'Vasile', age: 30 },
    { name: 'Ioana', age: 26 },
    { name: 'Alex', age: 36 },
    { name: 'Daniela', age: 36 },
    { name: 'Sorin', age: 33 }
];

let sortedPersons = persons.sort((a, b) => a.age - b.age);
console.log(sortedPersons);