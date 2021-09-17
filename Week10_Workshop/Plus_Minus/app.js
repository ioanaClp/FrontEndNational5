var positive = 0;
var negative = 0;
var zeros = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negative++;
    }
    if (arr[i] > 0) {
        positive++;
    }
    if (arr[i] == 0) {
        zeros++;
    }
}
console.log(positive / arr.length);
console.log(negative / arr.length);
console.log(zeros / arr.length);