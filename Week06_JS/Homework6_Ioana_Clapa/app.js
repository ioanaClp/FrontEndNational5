function numbersFrom1To20() {
    console.log("First exercise(a):");
    var result = [];

    for (var i = 1; i <= 20; i++) {
        console.log(i);
        result.push(i);
    }

    document.getElementById('output-1a').innerHTML = "Result = " + result;
}

numbersFrom1To20();

function oddFrom1To20() {
    console.log("First exercise(b):");
    var result = [];

    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 1) {
            console.log(i);
            result.push(i);
        }
    }
    document.getElementById('output-1b').innerHTML = "Result = " + result;
}

oddFrom1To20();

function sumArrayElements() {
    console.log("Second exercise(a):");

    var list = [2, 3, 5, 7, 5, 3];
    var sum = 0;

    for (var i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    console.log(sum);
    document.getElementById('output-2a').innerHTML = "Sum = " + sum;
}

sumArrayElements();

function maxElementsOfArray() {
    console.log("Second exercise(b):");

    var list = [2, 3, 5, 7, 5, 3];
    var max = list[0];

    for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    console.log(max);
    document.getElementById('output-2b').innerHTML = "Max = " + max;
}

maxElementsOfArray();

function elementAppearInArray(num) {
    console.log("Second exercise(c):");

    var list = [2, 3, 5, 7, 5, 3];

    var total = 0;

    for (var i = 0; i < list.length; i++) {
        if (num == list[i]) {
            total = total + 1;
        }
    }

    console.log(num + " appears " + total + " time(s) in the following list " + list);
    document.getElementById('output-2c').innerHTML = num + " appears " + total + " time(s) in the following list: [" + list + "]";
}

elementAppearInArray(5);

function first50Fibonacci() {
    console.log("Third exercise:");
    var result = [];

    var num1 = 0;
    var num2 = 1;
    var num3 = 0;

    for (var i = 0; i <= 50; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        console.log(num3);
        result.push(num3);
        document.getElementById('output-3').innerHTML = "Result = " + result + ',  ';
    }
}

first50Fibonacci();

function numbersFrom1To100() {
    console.log("Fourth exercise:");
    var result = [];

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
            result.push("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
            result.push("Buzz");
        }
    }
    document.getElementById('output-4').innerHTML = "Result = " + result;
}

numbersFrom1To100();



// Bonus exercises:


// 1)**********
//   **********
//   **********
//   **********

function firstPattern() {
    console.log("BONUS: First Pattern:");

    var string = "";
    var result = "";

    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 10; j++) {
            string += "*";
            result += "*";
        }
        string += "\n";
        result += "<br/>"
    }
    console.log(string);
    document.getElementById('output-pattern-1').innerHTML = result;
}

firstPattern();

// 2)*
//   **
//   ***
//   ****
//   *****

function secondPattern() {
    console.log("BONUS: Second Pattern:");

    var string = "";
    var result = "";

    for (var i = 1; i <= 5; i++) {
        for (var j = 0; j < i; j++) {
            string += "*";
            result += "*";
        }
        string += "\n";
        result += "<br/>"
        document.getElementById('output-pattern-2').innerHTML = result;
    }
    console.log(string);
}

secondPattern();

// 3)      *
//        **
//       ***
//      ****
//     *****

function thirdPattern() {
    console.log("BONUS: Third Pattern:");

    var n = 5;
    var string = "";
    var result = "";

    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < n - i; j++) { // printing spaces
            string += " ";
            result += " ";
        }
        for (var k = 0; k < i; k++) { //printing stars
            string += "*";
            result += "*";
        }
        string += "\n";
        result += "<br/>"
        document.getElementById('output-pattern-3').innerHTML = result;
    }
    console.log(string);
}

thirdPattern();

// 4)     *
//       ***
//      *****
//     *******
//    *********

function piramidPattern() {
    console.log("BONUS: Piramid Pattern:");

    var n = 5;
    var string = "";
    var result = "";

    for (var i = 1; i <= n; i++) {
        for (var j = n; j > i; j--) { //printing spaces
            string += " ";
            result += " ";
        }
        for (var k = 0; k < 2 * i - 1; k++) { //printing stars
            string += "*";
            result += "*";
        }
        string += "\n";
        result += "<br/>";
        document.getElementById('output-pattern-4').innerHTML = result;
    }
    console.log(string);
}

piramidPattern();

// 5)    1
//      222
//     33333
//    4444444
//   555555555

function piramidPatternNumber() {
    console.log("BONUS: Piramid Pattern Number:");

    var n = 5;
    var string = "";
    var result = "";

    for (var i = 1; i <= n; i++) {
        for (var j = n; j > i; j--) { //printing spaces
            string += " ";
            result += " ";
        }
        for (var k = 0; k < 2 * i - 1; k++) { //printing numbers
            string += i;
            result += i;
        }
        string += "\n";
        result += "<br/>"
        document.getElementById('output-pattern-5').innerHTML = result;
    }
    console.log(string);
}

piramidPatternNumber();


