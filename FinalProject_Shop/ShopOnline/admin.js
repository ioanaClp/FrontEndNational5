
// GET field inputs
// Create an object that looks like the one received from the mock api
const nameInput = document.getElementById("product-name")
const priceInput = document.getElementById("product-price")
const stockInput = document.getElementById("product-stock")
const categoryInput = document.getElementById("product-category")
const imageInput = document.getElementById("product-image")
const descriptionInput = document.getElementById("product-description")

const addProductButton = document.getElementById("submit-button")
addProductButton.addEventListener("click", onClickAdd)

window.onload = function () {
    getProducts()
}

// UI Class: Handle UI Tasks
class UI {
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.product-container');
        const form = document.querySelector('.product-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Function that is called when you click the add product button
function onClickAdd(e) {
    e.preventDefault()
    // Read all input fields and get their values

    console.log("Add product called")
    const nameValue = nameInput.value
    const priceValue = priceInput.value
    const stockValue = stockInput.value
    const categoryValue = categoryInput.value
    const imageValue = imageInput.value
    const descriptionValue = descriptionInput.value

    if (nameValue && priceValue && stockValue && categoryValue && imageValue && descriptionValue) {
        const newProduct = {
            name: nameValue,
            image: imageValue,
            price: priceValue,
            description: descriptionValue,
            category: categoryValue,
            stock: stockValue,
        }

        fetch("https://61363d228700c50017ef54cf.mockapi.io/products", {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            // TODO show success message
            UI.showAlert('Product Added', 'success');
            nameInput.value = ''
            priceInput.value = ''
            stockInput.value = ''
            categoryInput.value = ''
            imageInput.value = ''
            descriptionInput.value = ''

            getProducts();
        }).catch(e => {
            // TODO show error message
            UI.showAlert('Something went wrong. The product was not saved', 'danger');
        })
    } else {
        UI.showAlert('Please fill in all fields', 'danger');
    }
}


// Get Products
function getProducts() {
    fetch("https://61363d228700c50017ef54cf.mockapi.io/products")
        .then(res => res.json())
        .then(data => {
            let output = `<tbody id="output">`;

            data.forEach(product => {
                output += `
                <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" class="img-fluid img-thumbnail" style="width: 60%; height: 6vw; object-fit: cover"/></td>
                <td>${product.description}</td>
                <td><a href="#" id="edit-product" class="btn btn-dark" onclick="onClickEdit('${product.id}')">Edit</a></td>
                <td><a href="#" id="delete-product" class="btn btn-dark" onclick="onClickDelete('${product.id}')">Delete</a></td>
                </tr>
                `
            })

            output += `</tbody>`;
            document.getElementById('output').innerHTML = output;
        })
}

// PUT - edit existing product
function onClickEdit(productId) {
    console.log('Edit called ' + productId);

    fetch(`https://61363d228700c50017ef54cf.mockapi.io/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    })

        .then((response) => response.json())
        .then((data) => console.log(data));
}

// Delete Products
function onClickDelete(productId) {
    console.log('Delete called ' + productId)

    fetch(`https://61363d228700c50017ef54cf.mockapi.io/products/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            return getProducts();
        }).then(() => {
            UI.showAlert('Product deleted successfully', 'success');
        }).catch(() => {
            UI.showAlert('Something went wrong. The product was not deleted', 'danger');
        });
}