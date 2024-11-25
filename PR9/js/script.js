let cart = [];

function addToCart(item) {
    const quantity = parseInt(prompt('Вкажіть кількість:', 1));

    if (isNaN(quantity) || quantity <= 0) {
        alert('Некоректне значення!');
        return;
    }
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }

    updateCartIcon();
    alert('Товар додано до корзини');
}

function openCartPage() {
    if (cart.length === 0) {
        alert('Корзина пуста');
    } else {
        showCartItems();
    }
}

function showCartItems() {
    let cartContent = '<table><tr><th>№</th><th>Назва товару</th><th>Ціна за од.</th><th>К-сть</th><th>Сума</th><th>Дії</th></tr>';
    let total = 0;

    cart.forEach((item, index) => {
        const sum = item.price * item.quantity;
        total += sum;
        cartContent += `<tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity} (<a href="#" onclick="changeQuantity(${index})">змінити к-сть</a>)</td>
            <td>${sum}</td>
            <td><a href="#" onclick="removeFromCart(${index})">видалити</a></td>
        </tr>`;
    });

    cartContent += `<tr><td colspan="4">Разом до оплати</td><td>${total}</td><td></td></tr></table>`;

    document.getElementById('cart-modal-content').innerHTML = cartContent;
    document.getElementById('cart-modal').style.display = 'block';
}

function changeQuantity(index) {
    const newQuantity = parseInt(prompt('Вкажіть нову кількість:', cart[index].quantity));
    if (!isNaN(newQuantity) && newQuantity > 0) {
        cart[index].quantity = newQuantity;
        showCartItems();
        updateCartIcon();
    } else {
        alert('Некоректне значення!');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCartItems();
    updateCartIcon();
}

function closeModal() {
    document.getElementById('cart-modal').style.display = 'none';
}
function updateCartIcon() {
    const cartIconCount = document.getElementById('cart-count');
    cartIconCount.innerText = cart.length; 
}

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products-container');
    const pageTitle = document.getElementById('page-title');

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Не вдалося завантажити дані');
            }
            return response.json();
        })
        .then(data => {
            pageTitle.innerText = data.title; 
            renderProducts(data.products);
        })
        .catch(error => console.error(error));

    function renderProducts(products) {
        productsContainer.innerHTML = ''; 

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <div class="header">${product.name}</div>
                <img src="${product.image}" alt="${product.name}">
                <div class="location">${product.location}</div>
                <div class="price">
                    ${product.old_price ? `<span class="old-price">${product.old_price}$</span>` : ''}
                    ${product.price > 0 ? `${product.price}$` : 'Скоро в продажі'}
                </div>
                <div class="button" onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price}, quantity: 1 })">
                    Додати в кошик
                </div>
            `;

            productsContainer.appendChild(productCard);
        });
    }
});
\
