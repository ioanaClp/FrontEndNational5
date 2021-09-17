let numbers = [3, 4, 5, 11, 2, -1, 0];

for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}

// forEach
numbers.forEach((element, i) => console.log(element, i));

//Filter
let ages = [23, 45, 55, 12, 16, 97];
let canDrive = [];

// for (let i = 0; i <= ages.length - 1; i++) {
//     if (ages[i] >= 18) {
//         canDrive.push(ages[i]);
//     }
// }

// ages.forEach(age => {
//     if (age >= 18) canDrive.push(age);
// })

canDrive = ages.filter(age => age >= 18);

console.log(canDrive);

//Sort
let numbersUnsorted = [1, 12, 5, 22, 44, 4, 6, 32];
let sortedNumbers = numbersUnsorted.sort((a, b) => a - b);

function compareFunction(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

console.log(sortedNumbers);

//Map
let numbersPlusOne = numbers.map((number) => number + 1);
console.log(numbers);

let brands = [
    { name: 'apple', logo: 'x' },
    { name: 'samsung', logo: 'y' },
    { name: 'huawey', logo: 'z' },
    { name: 'xiaomi', logo: 'l' },
    { name: 'asus', logo: 'i' }
]

let output = brands.map(brand =>
    `<div>
        Hello
    </div>`
);

document.querySelector('.container').innerHTML = output;
console.log(output);