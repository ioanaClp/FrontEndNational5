let storageBtn = document.getElementById('store-btn');
let getBtn = document.getElementById('get-btn');

storageBtn.addEventListener('click', addToLocalStorage);

let product = {
    name: "phone13",
    id: 1,
    price: 200,
    details: "Best Phone",
};

let product1 = {
    name: "phone8",
    id: 2,
    price: 100,
    details: "iPhone",
};

let cart = [];
cart.push(product);
cart.push(product1);

function addToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}