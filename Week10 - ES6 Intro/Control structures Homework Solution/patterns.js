function squarePrintingPattern(n) {
	var line = '';

	for (var i = 1; i <= n; i++) {
		line = line + '*';
	}

	for (var j = 1; j <= n; j++) {
		console.log(line);
	}
}

function squarePrintingPattern2(n) {
	var output = '';

	for (var i = 1; i <= n; i++) {
		// output += ' ' + i;
		for (var j = 1; j <= n; j++) {
			output += ' ' + '*';
		}
		output += '\n';
	}

	console.log(output);
}

squarePrintingPattern2(5);

function trianglePrintingPattern(n) {
	var output = '';
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			output += ' ' + '*';
		}
		output += '\n';
	}
	console.log(output);
}

trianglePrintingPattern(5);

// 11

// 21 22

// 31 32 33

// 41 42 43 44

// 51 52 53 54 55

function trianglePrintingPatternReversed(n) {
	var output = '';
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n - i; j++) {
			output += '  ';
		}

		for (var k = 1; k <= i; k++) {
			output += ' ' + '*';
		}
		output += '\n';
	}
	console.log(output);
}

trianglePrintingPatternReversed(5);

//             11

//          21 22

//       31 32 33

//    41 42 43 44

// 51 52 53 54 55
