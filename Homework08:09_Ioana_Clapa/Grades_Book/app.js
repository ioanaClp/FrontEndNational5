//Selectors
const addStudentInput = document.querySelector('.student-input');
const addStudentButton = document.querySelector('.student-button');
const sortAsc = document.querySelector('.sort-asc');
const sortDesc = document.querySelector('.sort-desc');
const table = document.querySelector('.table');
const tableBody = document.querySelector('#student-list');
const addGradeInput = document.querySelector('.grade-input');
const studentGradesTable = document.getElementById('student-grades');
const tableBodyGrades = document.querySelector('#grades-list');
const gradeInput = document.querySelector('.grade-input');

//Event Listeners
addStudentButton.addEventListener('click', addStudent);
sortAsc.addEventListener('click', sortListAsc);
sortDesc.addEventListener('click', sortListDesc);

class Student {
    constructor(name, grades) {
        this.name = name
        this.grades = grades
    }
}
var students = []
var currentSelectedStudent = null


//Functions
function addStudent(event) {
    //Prevent form from submitting
    event.preventDefault();

    if (addStudentInput.value !== "") {
        const studentName = addStudentInput.value
        const student = new Student(studentName, [])
        students.push(student)

        // Draw table
        drawStudentsTable()

        //CLEAR TO DO INPUT VALUE
        addStudentInput.value = "";
    }
}

function drawStudentsTable() {
    tableBody.innerHTML = ""
    students.forEach((student, i) => {
        const newTr = document.createElement('tr');
        newTr.classList.add('added-tr')
        newTr.innerHTML = `
        <td>${student.name}</td>
        <td class="average-column">${averageGrades(student.grades)}</td>
        <td><button id="details-button" onclick="viewStudentDetails('${i}')">View/Add Details</button></td>
        <td><i class="fas fa-trash-alt delete" onclick="deleteStudent('${i}')"></i></td>
        `;

        tableBody.appendChild(newTr);
    })
}

function deleteStudent(i) {
    delete students[i]
    drawStudentsTable()
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
            var tds = tableBody.getElementsByClassName("average-column")

            if (isAsc && tds[i].innerHTML > tds[i + 1].innerHTML) {
                shouldSwitch = true;
                break;
            } else if (!isAsc && tds[i].innerHTML < tds[i + 1].innerHTML) {
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

function viewStudentDetails(studentI) {
    const student = students[studentI]
    this.currentSelectedStudent = student;

    drawGradesTable(studentI)

    console.log(document.getElementById('student-name-grade'));
    document.getElementById('student-name-grade').innerHTML = "Student's Name: " + student.name;
}

function removeGrade(studentIndex, gradeIndex) {
    console.log("on click remove", studentIndex + " " + gradeIndex)
    const student = students[studentIndex]
    delete student.grades[gradeIndex]

    drawGradesTable()
}

function drawGradesTable(studentI) {
    const student = students[studentI]

    tableBodyGrades.innerHTML = "" // remove old data

    student.grades.forEach((item, gradeI) => {
        const newTr = document.createElement('tr');
        newTr.classList.add('added-grade-tr')

        newTr.innerHTML = `
            <td>${item}</td>
            <td><i class="fas fa-trash-alt delete" onclick="deleteStudent('${i}')"></i></td>
            <td><i class="fas fa-trash-alt delete" onclick="removeGrade('${studentI}')"></i></td>
          `;

        tableBodyGrades.appendChild(newTr);
    })

    studentGradesTable.style.visibility = "visible";

    const addGradeBtn = document.getElementById('add-grade');
    addGradeBtn.addEventListener('click', addGrade);
}

function addGrade() {
    if (gradeInput.value !== "") {
        currentSelectedStudent.grades.push(gradeInput.value)

        const newTr = document.createElement('tr');
        newTr.classList.add('added-grade-tr')
        newTr.innerHTML = `
        <td>${gradeInput.value}</td>
        <td><i class="fas fa-trash-alt delete"></i></td>
      `;
        tableBodyGrades.appendChild(newTr);
        gradeInput.value = ""

        drawStudentsTable()
    }
}

function averageGrades(grades) {
    console.log("grades", grades)
    var sum = 0;

    grades.forEach(element => {
        sum = sum + parseInt(element);
    })

    var avg = sum / grades.length;
    return avg;
}

// Event: Remove a Student
document.querySelector('#student-list').addEventListener('click', (e) => {
    // Remove book from UI
    deleteStudent(e.target);
});