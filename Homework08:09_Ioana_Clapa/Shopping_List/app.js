//Selectors
const shoppingInput = document.querySelector('.shopping-input');
const shoppingButton = document.querySelector('.shopping-button');
const shoppingList = document.querySelector('.shopping-list');
const sortAsc = document.querySelector('.asc-sort');
const sortDesc = document.querySelector('.desc-sort');

//Event Listeners
shoppingButton.addEventListener('click', addShopping);
shoppingList.addEventListener('click', deleteCheck);
sortAsc.addEventListener('click', sortListAsc);
sortDesc.addEventListener('click', sortListDesc);

//Functions
function addShopping(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV 
    const shoppingDiv = document.createElement("div");
    shoppingDiv.classList.add("shopping");
    //Create LI
    const newShopping = document.createElement('li');
    newShopping.innerText = shoppingInput.value;
    newShopping.classList.add('shopping-item');
    shoppingDiv.appendChild(newShopping);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    shoppingDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    shoppingDiv.appendChild(trashButton);
    //APPEND TO LIST
    shoppingList.appendChild(shoppingDiv);
    //CLEAR TO DO INPUT VALUE
    shoppingInput.value = "";
}

function deleteCheck(e) {
    // console.log(e.target);
    const item = e.target;

    //DELETE SHOPPING
    if (item.classList[0] === "trash-btn") {
        const shopping = item.parentElement;
        //Animation
        shopping.classList.add('fall');
        shopping.addEventListener("transitionend", function () {
            shopping.remove();
        })
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function sortListAsc(event) {
    //Prevent form from submitting
    event.preventDefault();
    sortList(true)
}

function sortListDesc(event) {
    //Prevent form from submitting
    event.preventDefault();
    sortList(false)
}

function sortList(isAsc) {
    var i, switching, listOfDivs, shouldSwitch;
    var list = shoppingList

    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        listOfDivs = list.getElementsByTagName("div");

        // Loop through all list items:
        for (i = 0; i < (listOfDivs.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Check if the next item should
            switch place with the current item: */
            if (isAsc && listOfDivs[i].innerHTML.toLowerCase() > listOfDivs[i + 1].innerHTML.toLowerCase()) {
                /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
            } else if (!isAsc && listOfDivs[i].innerHTML.toLowerCase() < listOfDivs[i + 1].innerHTML.toLowerCase()) {
                /* If next item is alphabetically higher than current item,
               mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            listOfDivs[i].parentNode.insertBefore(listOfDivs[i + 1], listOfDivs[i]);
            switching = true;
        }
    }
}