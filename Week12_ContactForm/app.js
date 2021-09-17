// Get html elements
const formElem = document.getElementById('form');
const firstNameElem = document.getElementById('first-name');
const lastNameElem = document.getElementById('last-name');
const emailElem = document.getElementById('email');
const messageElem = document.getElementById('message');

// Check Elems
// console.log(formElem, firstNameElem, lastNameElem, emailElem, messageElem);

class UI {
    constructor() {
        this.allElementsAreValid = true;
    }

    showError(elem, message) {
        if (elem && elem.parentElement) {
            if (elem.parentElement.classList.contains('error')) {
                elem.parentElement.classList.remove('error');
            }
            elem.parentElement.classList.add('error');

            const smallErrorElem = elem.parentElement.querySelector('.error-message');
            smallErrorElem.innerHTML = message;

            if (smallErrorElem) {
                smallErrorElem.innerHTML = message;
            }
        }
    }

    showSuccess(elem) {
        if (elem && elem.parentElement) {
            if (elem.parentElement.classList.contains('error')) {
                elem.parentElement.classList.remove('error');
            }
            elem.parentElement.classList.add('success');
        }
    }

    showConfirmationBanner() {
        if (this.allElementsAreValid === true) {
            let successMessageElem = document.createElement('p');
            successMessageElem.classList.add('success');
            successMessageElem.innerHTML = 'Thank you for contacting us, ' + firstNameElem.value;

            let firstContainerElement = document.getElementById('first-input');
            formElem.insertBefore(successMessageElem, firstContainerElement);

            setTimeout(() => { successMessageElem.remove() }, 2000);
        }
    }

    clearFields() {
        formElem.reset();
        firstNameElem.parentElement.classList.remove('success');
        lastNameElem.parentElement.classList.remove('success');
        emailElem.parentElement.classList.remove('success');
        messageElem.parentElement.classList.remove('success');
    }
}

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    let ui = new UI();

    if (firstNameElem.value === '') {
        ui.showError(firstNameElem, 'First name required!');
        // ui.allElementsAreValid = false;
    } else if (firstNameElem.value.length <= 3) {
        ui.showError(firstNameElem, 'First name must contain min 4 chars!');
        // ui.allElementsAreValid = false;
    } else {
        ui.showSuccess(firstNameElem);
        ui.allElementsAreValid = true;
    }

    if (lastNameElem.value === '') {
        ui.showError(lastNameElem, 'Last name required!');
    } else if (lastNameElem.value.length <= 3) {
        ui.showError(lastNameElem, 'Last name must contain min 4 chars!');
    } else {
        ui.showSuccess(lastNameElem);
        ui.allElementsAreValid = true;
    }

    if (emailElem.value === '') {
        ui.showError(emailElem, 'Email required!');
    } else {
        ui.showSuccess(emailElem);
        ui.allElementsAreValid = true;
    }

    if (messageElem.value === '') {
        ui.showError(messageElem, 'Message required!');
    } else if (messageElem.value.length <= 4) {
        ui.showError(messageElem, 'Message must contain min 5 chars!');
    } else {
        ui.showSuccess(messageElem);
        ui.allElementsAreValid = true;
    }

    if (ui.allElementsAreValid) {
        ui.showConfirmationBanner();
        ui.clearFields();
    }
})