function miniMaxSum(arr) {
    // Write your code here
    var sum = 0;
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    console.log(sum - max, sum - min);
}