window.onload = function () {
    getProducts()
}

// Get Products
function getProducts() {
    fetch("https://61363d228700c50017ef54cf.mockapi.io/products")
        .then(res => res.json())
        .then(data => {
            let output = ``;

            var counter = 0;

            data.forEach((product, index) => {
                if (counter < 4) {
                    counter++
                } else {
                    counter = 1;
                }

                if (counter === 1) {
                    output += `<div
                    class="d-flex row justify-content-center mb-3"
                    id="all-products-placeholder"
                  >`
                }

                output += `
                <div class="card-goup" style="width: 20rem">
                <div class="card border-0">
                  <a
                    class="text-dark"
                    style="text-decoration: none"
                    href="product_details.html?id=${product.id}"
                  >
                    <img
                      class="card-img-top img-fluid"
                      style="width: 100%; height: 20vw; object-fit: cover"
                      src="${product.image}"
                      alt="Card image cap"
                    />
                    <p class="card-text text-center pt-2">${product.name}</p>
                    <p class="card-text text-center">${product.price}</p>
                  </a>
                </div>
              </div>
                `

                if (index === data.length - 1 || counter == 4) {
                    output += `</div>`
                }

            })

            document.getElementById('products').innerHTML = output;
        })
}