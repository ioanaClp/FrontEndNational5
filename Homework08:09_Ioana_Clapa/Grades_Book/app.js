//Selectors
const addStudentInput = document.querySelector('.student-input');
const addStudentButton = document.querySelector('.student-button');
const sortAsc = document.querySelector('.sort-asc');
const sortDesc = document.querySelector('.sort-desc');
const viewStudentButton = document.querySelector('.details-button');
const deleteStudentButton = document.querySelector('.button-trash');
const table = document.querySelector('.table');
const tableBody = document.querySelector('#student-list');

//Event Listeners
addStudentButton.addEventListener('click', addStudent);
sortAsc.addEventListener('click', sortListAsc);
sortDesc.addEventListener('click', sortListDesc);
// viewStudentButton.addEventListener('click', viewStudentDetails);


//Functions
function addStudent(event) {
    //Prevent form from submitting
    event.preventDefault();

    //Create tr
    const newTr = document.createElement('tr');
    newTr.classList.add('added-tr')

    newTr.innerHTML = `
        <td>${addStudentInput.value}</td>
        <td class="average-column">${Math.floor(Math.random() * 10)}</td>
        <td><button class="details-button">View/Add Details</button></td>
        <td><i class="fas fa-trash-alt delete"></i></td>
      `;

    // Appen row in table
    tableBody.appendChild(newTr);

    //CLEAR TO DO INPUT VALUE
    addStudentInput.value = "";
}

function deleteStudent(el) {
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
}

function sortListAsc(event) {
    //Prevent form from submitting
    event.preventDefault();
    sortList(true);
}

function sortListDesc(event) {
    //Prevent form from submitting
    event.preventDefault();
    sortList(false);
}

function sortList(isAsc) {
    console.log("sorting clicked isAsc = " + isAsc)
    var i, switching, listOfTr, shouldSwitch;
    switching = true;

    while (switching) {
        switching = false;
        listOfTr = tableBody.getElementsByClassName('added-tr');

        for (i = 0; i < (listOfTr.length - 1); i++) {
            shouldSwitch = false;
            console.log("innerhtml " + listOfTr[i])
            var tds = tableBody.getElementsByClassName("average-column")
            console.log("tds " + tds[0].innerHTML)



            if (isAsc && listOfTr[i].innerHTML.toLowerCase() > listOfTr[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (!isAsc && listOfTr[i].innerHTML.toLowerCase() < listOfTr[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            listOfTr[i].parentNode.insertBefore(listOfTr[i + 1], listOfTr[i]);
            switching = true;
        }
    }
}

// Event: Remove a Student
document.querySelector('#student-list').addEventListener('click', (e) => {
    // Remove book from UI
    deleteStudent(e.target);
});