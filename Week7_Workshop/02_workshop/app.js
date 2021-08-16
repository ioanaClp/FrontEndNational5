function max2Numbers(x, y) {
    if (x > y) {
        console.log("Maximul este: " + x);
    } else if (y > x) {
        console.log("Maximul este: " + y)
    } else {
        console.log("Numerele sunt egale");
    }
}

max2Numbers(12, 3);
max2Numbers(-12, -5);

// 2. Write a JS program to find maximum between three numbers using if else. JS program to input three numbers from user and print the maximum in a paragraph.

// Example
// Input
// Input num1: 10
// Input num2: 20
// Input num3: 30
// Output

// Maximum = 30

function max3Numbers(x, y, z) {
    if (x > y && x > z) {
        console.log("Maximul este: " + x);
    } else if (y > x && y > z) {
        console.log("Maximul este: " + y)
    } else if (z > x && y > x){
        console.log("Maximul este: " + y);
    } else {
        console.log("Numerele sunt egale");
    }
}

max3Numbers(10, 20, 30);

// 3. Write a JS program to check whether an alphabet is vowel or consonant using switch case. 

// Example
// Input
// Input character: a
// Output

// 'a' is vowel

function vowel(letter){
    switch(letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log(letter + " Vowel");
            break;
        default:
            console.log(letter + " Consonant");
            break;
    }
}

vowel("c");
vowel("a");

// 4. Write a JS program to enter month number between(1-12) and print number of days in month using if else. 

// Example
// Input
// Enter month number: 1
// Output

// It contains 31 days.

function monthDays(month){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        console.log("31 days");
    } else if(month == 4 || month == 6 || month == 9 || month == 11 ){
        console.log("30 days");
    } else if(month == 2){
        console.log("28 days");
    }
}

monthDays(1);
monthDays(9);
monthDays(2);

//5. Write a JavaScript program to sum the multiples of 3 and 5 under 100

function multipleOf3And5() {
    var sum = 0;

    for(var i = 0; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

multipleOf3And5();

// 6. Calculate the average of the numbers in an array of numbers

function calculateAverage() {
    var grades = [9, 10, 8, 9, 10, 7];
    var sum = 0;

    for( var i = 0; i < grades.length; i++){
        sum = sum + grades[i];
    }

    var avg = sum / grades.length;
    console.log(avg);
}

calculateAverage();
    

// 7. Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiveArray() {
    var arr = [5, -1, 6, 3, -10, 10];
    var positiveArr = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            positiveArr.push(arr[i]);
        }
        console.log(positiveArr);
    }
    // return positiveArr;
    
}


// 9. Calculate the sum of odd numbers greater than 10 and less than 30

function sumOddNumbers(){
    var sum = 0;
    for(var i = 11; i > 10 && i < 30; i++){
        if(i % 2 === 1) {
            sum = sum + i;
        }
    }
    console.log("9. The Sum of all odd numbers between 10 and 30 is: " + sum);
}

sumOddNumbers();

// 8. Print the multiplication table with 9
// Output:
// 1 x 9 = 9
// 2 x 9 = 18

// 9 x 9 = 81
// 10 x 9 = 90

function multiOf9() {
    var multi = 1;

    console.log("8. Multiplication table with 9:");

    for(var i = 1; i <= 10; i++){
        multi = i * 9;
        console.log(i + " * 9 = " + multi);
    }
}

multiOf9();

function multiOfN(n) {
    var multi = 1;

    console.log("Workshop 1");

    for(var i = 1; i <= 10; i++){
        multi = i * n;
        console.log(i + " * " + n + " = " + multi);
    }
}

multiOfN(6);
multiOfN(5);