// Get Products

const productsURL = "https://61363d228700c50017ef54cf.mockapi.io/products";

fetch(productsURL)
    .then(response => response.json())
    .then((data) => console.log(data[33].name));


//Get Product by Id
let id = "2";

fetch(productsURL + id)
    .then(response => response.json())
    .then((data) => console.log(data));

//POST- add new product
let product = {
    name: 'iphone 12',
    price: 900,
    picture: 'ceva.png',
};

fetch(productsURL, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application.json' }
}).then((response) => response.json()).then((data) => console.log(data));

//PUT - edit existing product
let productToEdited = {
    price: 1900
};

fetch(productsURL + '5', {
    method: "POST",
    body: JSON.stringify(productToEdited),
    headers: { 'Content-Type': 'application.json' }
}).then((response) => response.json()).then((data) => console.log(data));