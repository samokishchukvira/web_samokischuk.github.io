let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    const languageModal = document.getElementById('language-modal');

    const savedLanguage = localStorage.getItem('language');
    if (!savedLanguage) {
        languageModal.style.display = 'flex';
    } else {
        loadLanguage(savedLanguage);
    }

    window.setLanguage = function (language) {
        languageModal.style.display = 'none';
        localStorage.setItem('language', language);
        loadLanguage(language);
    };

    function loadLanguage(language) {
        fetch(`data_${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('page-title').innerText = data.title;
                renderProducts(data.products);
            })
            .catch(error => console.error('Помилка завантаження даних:', error));
    }

    function renderProducts(products) {
        const productContainer = document.getElementById('products-container');
        productContainer.innerHTML = '';

        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.location}</p>
                <p>${product.price}</p>
                <button onclick="addToCart({ id: ${index}, name: '${product.name}', price: ${parseFloat(product.price.replace('$', '')) || 0} })">
                    ${product.button}
                </button>
            `;

            productContainer.appendChild(productCard);
        });
    }

    // Функції для корзини
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

    const changeLanguageButton = document.createElement('button');
    changeLanguageButton.innerText = 'Змінити мову';
    changeLanguageButton.onclick = () => {
        languageModal.style.display = 'flex';
    };
    document.body.appendChild(changeLanguageButton);

});
