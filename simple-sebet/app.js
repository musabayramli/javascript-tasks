let cart = [];
let total = 0;

function addToCart(product, price) {
    let item = cart.find(i => i.product === product);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCart();
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.toggle('active'); // Səbəti açmaq və bağlamaq üçün 'active' sinifini dəyişir
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li class="cart-item">
                ${item.product} - $${item.price} x ${item.quantity}
                <div>
                    <button class="decrease" onclick="changeQuantity('${item.product}', -1)">-</button>
                    <button class="increase" onclick="changeQuantity('${item.product}', 1)">+</button>
                    <button onclick="removeFromCart('${item.product}')">Sil</button>
                </div>
            </li>
        `;
    });

    totalElement.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function changeQuantity(product, change) {
    let item = cart.find(i => i.product === product);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(product);
        }
    }
    updateCart();
}

function removeFromCart(product) {
    cart = cart.filter(i => i.product !== product);
    updateCart();
}
