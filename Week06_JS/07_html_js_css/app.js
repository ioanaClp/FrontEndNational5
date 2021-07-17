function sum2numbers() {
  var firstNumberInput = document.getElementById("firstnumber");
  var secondNumber = document.getElementById("secondnumber").value;

  var firstNumber = firstNumberInput.value;

  var sum = Number(firstNumber) + Number(secondNumber);
  console.log(sum);

  var output = document.getElementById("output");
  

  output.innerHTML =
    "Suma dintre " + firstNumber + " si " + secondNumber + " este: " + sum;
}

var cap;

if(cap <= 1000){
    console.log("40Lei");
} else if (cap >= 1001 && cap <= 1200){
    console.log("48Lei");
} else if (cap >= 1201 && cap <= 1400 ){
    console.log("56Lei");
} else if (cap >= 1401  && cap <= 1600){
    console.log("64Lei");
}