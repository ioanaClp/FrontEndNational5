function print1to20() {
	var result = '';
	for (var i = 1; i <= 20; i++) {
		result = result + i + ' ';
		// console.log(i);
	}
	console.log(result);
}

print1to20();

function print1to20odd() {
	var result = '';
	for (var i = 1; i <= 20; i++) {
		if (i % 2 == 1) {
			result = result + i + ' ';
		}
		// console.log(i);
	}
	console.log(result);
}

print1to20odd();

function sumOfArrayElems(arr) {
	if (arr == 'undefined') {
		return;
	}

	if (typeof arr != 'object') {
		return;
	}

	var sum = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}
	// console.log(arr);
	console.log(sum);
}

var arr1 = [2, 4, 5];
var arr2 = [21, 0, 5];
var arr3 = [12, 334, 35, 2, 6];

sumOfArrayElems(arr1);
sumOfArrayElems(arr2);
sumOfArrayElems(arr3);

sumOfArrayElems();

function maxElemOfArr(arr) {
	if (arr == 'undefined') {
		return;
	}

	if (typeof arr != 'object') {
		return;
	}

	var max = arr[0];
	for (var i = 1; i <= arr.length - 1; i++) {
		if (arr[i] > max) {
			max = arr[i];
			// console.log(max);
		}
	}
	console.log('Max element is: ' + max);
}

maxElemOfArr([1, 3, 8, 22, 15, 222, 1]);

function noOfApprn(arr, element) {
	var result = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] === element) {
			// result = result + 1;
			result++;
		}
	}
	console.log(result);
}

noOfApprn([1, 3, 44, 3, 3, 333, 1, 3], 3);

// 0 1 1 2 3 5 8 13 21 ....
function fibo(n) {
	var fiboArr = [0, 1];
	for (var i = 2; i <= n; i++) {
		fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
	}
	console.log(fiboArr);
}

fibo(8);

function fibo2(n) {
	var fibo1 = 0;
	var fibo2 = 1;
	var tmp;

	while (n - 2 >= 0) {
		tmp = fibo1 + fibo2;
		fibo1 = fibo2;
		fibo2 = tmp;
		n--;
	}
	console.log(fibo2);
}

fibo2(8);

function fiboReccursive(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;

	return fiboReccursive(n - 1) + fiboReccursive(n - 2);
}

let result = fiboReccursive(8);
console.log(result);

function fizzBuzz(n) {
	for (var i = 0; i <= n; i++) {
		if (i % 15 == 0) {
			console.log('FizzBuzz');
		} else if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(100);
