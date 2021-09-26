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

            getRelatedProducts(data);
        })

}

function getRelatedProducts(initialProduct) {
    fetch("https://61363d228700c50017ef54cf.mockapi.io/products")
        .then(res => res.json())
        .then(data => {
            let output = ``;
            data.forEach(element => {
                if (element.category === initialProduct.category && element.id !== initialProduct.id) {
                    output += `
                        <div class="card-goup" style="width: 18rem">
                        <div class="card border-0">
                        <a class="text-dark" style="text-decoration: none" href="#">
                            <img
                            class="card-img-top img-fluid"
                            style="width: 100%; height: 14vw; object-fit: cover"
                            src="${element.image}"
                            alt="Card image cap"
                            />
                            <p class="card-text text-center pt-2">
                            ${element.name} <br />
                            <small>${element.price}</small>
                            </p>
                        </a>
                        </div>
                    </div>
                    `
                }

            });
            document.getElementById('related-products-container').innerHTML = output;
        })
}