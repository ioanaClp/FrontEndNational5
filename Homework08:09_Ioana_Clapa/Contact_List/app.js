class Person {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

var contactNameElement = document.getElementById('name');
var phoneNumberElement = document.getElementById('phone-number');
var addContactElement = document.getElementById('submit-btn');
var tableElement = document.getElementById('contact-table');
addContactElement.addEventListener('click', addContactInList);

var peopleList = [];
var isEditing = false;
var editedRowId = null;

function addContactInList() {
    console.log(`Button clicked!. Is isEditing = ${isEditing}`);

    if (isEditing && editedRowId !== null) {
        // Editing person
        var row = document.getElementById(editedRowId);
        row.cells[0].innerHTML = contactNameElement.value;
        row.cells[1].innerHTML = phoneNumberElement.value;
    } else {
        // Adding new person
        var id = peopleList.length;

        var newPerson = new Person(contactNameElement.value, phoneNumberElement.value);
        peopleList.push(newPerson);

        console.log("New list of people", peopleList);

        document.getElementById('added').style.visibility = "visible";

        var row = tableElement.insertRow();
        row.setAttribute("id", id);

        var cell1 = row.insertCell();
        cell1.innerHTML = newPerson.name;

        var cell2 = row.insertCell();
        cell2.innerHTML = newPerson.phoneNumber;

        var cell3 = row.insertCell();
        cell3.innerHTML = `<a href="#" onclick="onEdit(${id})">Edit</a>`;

        var cell4 = row.insertCell();
        cell4.innerHTML = `<a href="#" onclick="onClickDelete(${id});">Delete</a>`;
    }

    isEditing = false;
    editedRowId = null;
    resetInput()
}

function onEdit(id) {
    var row = document.getElementById(id);
    var name = row.cells[0].innerHTML;
    var phoneNumber = row.cells[1].innerHTML;

    // Change contact and phone number input forms with row's values
    contactNameElement.value = name;
    phoneNumberElement.value = phoneNumber;

    isEditing = true;
    editedRowId = id;
}


function resetInput() {
    contactNameElement.value = "";
    phoneNumberElement.value = "";
}

function onClickDelete(id) {
    console.log("On delete row by id", id);

    var rowToBeDeleted = document.getElementById(id);
    rowToBeDeleted.parentNode.removeChild(rowToBeDeleted);


    if (id == editedRowId) {
        isEditing = false;
        editedRowId = null;

        contactNameElement.value = "";
        phoneNumberElement.value = "";
    }
}


