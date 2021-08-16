var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var message = document.getElementById('message');
var submitBtn = document.getElementById('submit-btn');
var male = document.getElementById('male');
var female = document.getElementById('female');
var success = document.getElementById('success');
var photo = document.getElementById('photo');


submitBtn.addEventListener('click', validateFields);
male.addEventListener('click', onClickMale);
female.addEventListener('click', onClickFemale);


function validateFields() {
    console.log("Button clicked!");

    if (firstName.value.length == 0) {
        firstName.style.borderColor = "red";
    } else {
        firstName.style.borderColor = "green";
    }

    if (lastName.value.length == 0) {
        lastName.style.borderColor = "red";
    } else {
        lastName.style.borderColor = "green";
    }

    if (message.value.length == 0) {
        message.style.borderColor = "red";
    } else {
        message.style.borderColor = "green";
    }

    if (firstName.value.length >= 1 && lastName.value.length >= 1 && message.value.length >= 1) {
        success.style.visibility = "visible";
        document.querySelector('#success p').innerHTML = "Thank you for contacting us, " + firstName.value + "!";
        resetData();
    }
}

function resetData() {
    firstName.value = "";
    firstName.style.borderColor = "#ceaa9a";
    lastName.value = "";
    lastName.style.borderColor = "#ceaa9a";
    message.value = "";
    message.style.borderColor = "#ceaa9a";
    male.checked = true;
    female.checked = false;
    document.getElementById("photo").src = "Images/profile-man.png";
}

function onClickMale() {
    console.log("selected male");

    document.getElementById("photo").src = "Images/profile-man.png";
}

function onClickFemale() {
    console.log("selected female");

    document.getElementById("photo").src = "Images/profile-woman.png";
}