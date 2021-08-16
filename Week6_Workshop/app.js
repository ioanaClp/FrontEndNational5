function bmiCalculator() {
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);

    bmi = weight/(height * height);

    if(gender == "M" || gender == "F"){
        if(bmi < 18.5){
            range = "Underweight";
        } else if(bmi > 18.5 || bmi < 25){
            range = "Normal";
        } else if(bmi > 25.0 || bmi < 30){
            range = "Overweight";
        } else if(bmi > 30.0){
            range = "Obese";
        }
    } 

    document.getElementById('output').innerHTML =
		name + " | " + gender + " | BMI: " +  bmi + " | " + range;
}

bmiCalculator();


