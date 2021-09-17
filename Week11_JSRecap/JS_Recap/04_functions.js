// let totalPrice = price * quantity;
// console.log(totalPrice);

function calculateTotalPrice(price = 10, quantity = 25) {
    let totalPrice = price * quantity;
    return totalPrice;
}

function calculateRealPrice(price, discount) {
    return price * (1 - discount);
}

let realPrice = calculateRealPrice(10, 0.05);
console.log(calculateTotalPrice(realPrice, 100));