// literal object
let phone = {
    brand: "iphone",
    color: "white",
    price: 200,
    qt: 100,
    totalPrice: function () {
        return this.price * this.qt;
    }
};

console.log(phone.totalPrice());

console.log(typeof phone);
console.log(phone.brand);
console.log(phone['brand']);

let c = 'color';
console.log(phone[c]);

function calculateTotalPrice(product) {
    if (product && product.price && product.qt) return product.price * product.qt;
}

let phone1 = null;
calculateTotalPrice(phone1);


// constructor functions

// function Product(name, price, qt = 0) {  // numele de clase se scrie cu litera mare
//     this.name = name;
//     this.price = price;
//     this.qt = qt;
// }

// let product1 = new Product('monitor', 100, 25);
// console.log(product1.name);
// console.log(product1.qt);
// let product2 = new Product('laptop');

// console.log(Product);

// Product.prototype.totalPrice = function () {
//     return this.price * this.qt;
// };

// console.log('Product.prototype = ', Product.prototype);

// console.log(product1.totalPrice());
// console.log(product2.totalPrice());

// console.log(product1.__proto__.__proto__);
// console.log(Product.prototype.__proto__);

class Product {
    constructor(name, price, qt) {
        this.name = name;
        this.price = price;
        this.qt = qt;
    }
    totalPrice() {       // method
        return this.price * this.qt;
    }
}

console.log(Product.prototype);

let p1 = new Product('iphone', 1000, 10);
console.log(p1.__proto__.__proto__);

Product.prototype.sayHello = function () {   // method
    console.log('Hello ');
}
