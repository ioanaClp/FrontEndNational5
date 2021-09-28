window.onload = function () {
    cartUI()
}

function cartUI() {
    let localStorageProducts = localStorage.getItem('cartProducts')
    localStorageProducts = JSON.parse(localStorageProducts);

    document.getElementById('output').innerHTML = '';

    localStorageProducts.forEach(product => {
        const tr = document.createElement('tr');

        const srcImage = document.createElement('img');
        srcImage.src = product.image;
        srcImage.className = 'img-fluid img-thumbnail';
        srcImage.style = 'width: 60%; height: 6vw; object-fit: cover'
        const tdImage = document.createElement('td');
        tdImage.appendChild(srcImage);

        const linkToProduct = document.createElement('a')
        linkToProduct.textContent = product.name
        linkToProduct.style.textDecoration = 'none'
        linkToProduct.style.color = 'black'
        linkToProduct.href = `product_details.html?id=${product.id}`
        const tdName = document.createElement('td');
        tdName.appendChild(linkToProduct)

        const tdPrice = document.createElement('td');
        tdPrice.innerHTML = product.price;

        const tdQuantity = document.createElement('td');
        tdQuantity.innerHTML = '1';

        const tdTotalPrice = document.createElement('td');
        tdTotalPrice.innerHTML = product.price;

        const linkDelete = document.createElement('a');
        linkDelete.id = 'delete-product';
        linkDelete.className = 'btn btn-dark';
        linkDelete.innerHTML = 'Delete';
        linkDelete.onclick = function () {

        }
        const tdDelete = document.createElement('td');
        tdDelete.appendChild(linkDelete);

        tr.appendChild(tdImage);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdTotalPrice);
        tr.appendChild(tdDelete);

        document.getElementById('output').appendChild(tr);
    });
}