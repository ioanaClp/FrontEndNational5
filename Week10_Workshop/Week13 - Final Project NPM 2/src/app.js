import { http } from './http.js';

const productsURL = 'https://61363d158700c50017ef54b5.mockapi.io/products/';

//Get product from api
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http.get(productsURL).then((data) => console.log(data));
}
