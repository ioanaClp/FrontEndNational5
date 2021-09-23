window.onload = function () {
    getProduct()
}

// Get Products
function getProduct() {
    let searchParamString = window.location.search;

    const searchParam = new URLSearchParams(searchParamString);

    console.log(searchParam.get('id'));
    const id = searchParam.get('id');

    fetch(`https://61363d228700c50017ef54cf.mockapi.io/products/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.getElementById('product-title').innerHTML = data.name;
            document.getElementById('product-price').innerHTML = data.price;
            document.getElementById('product-description').innerHTML = data.description;
            document.getElementById('product-stock').innerHTML = data.stock;
            document.getElementById('product-image-details').src = data.image;
        })

}