import { http } from "./http.js";
import { ui } from "./ui.js";

const productsURL = 'https://61363d228700c50017ef54cf.mockapi.io/products'

//Get products from api
document.addEventListener('DOMContentLoad', getProducts);

function getProducts() {
    http.get(productsURL).then((products) => ui.showProducts(products));
}