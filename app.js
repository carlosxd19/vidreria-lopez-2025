// =======================================================
// === 1. DATOS Y VARIABLES GLOBALES =======================
// =======================================================

const allProducts = [
    // ------------------------------------
    // --- VENTANAS (Ventanas Corredizas) ---
    // ------------------------------------
    {
        id: 101,
        name: 'Ventanas Corredizas Pesada',
        category: 'Ventanas',
        price: 2800,
        description: 'Ventanas corredizas de alta resistencia, que se mueven las 2 hojas y tela, y diseño moderno. Con material de aluminio color blanco.',
        img: 'img/ventana-corrediza.jpg'
    },
    {
        id: 102,
        name: 'Ventanas Corredizas Pesadas con arco',
        category: 'Ventanas',
        price: 4100,
        description: 'Ventana que se mueven las 2 hojas y tela. Con material color madera.',
        img: 'img/ventana-pesada.jpg'
    },
    {
        id: 103,
        name: 'Ventanas Económicas',
        category: 'Ventanas',
        price: 1850,
        description: 'Ventanas accesibles sin comprometer la calidad. Vidrio fijo y corre una sola hoja y tela fija.',
        img: 'img/door.jpg'
    },
    {
        id: 104,
        name: 'Corrediza Pesada con Arco',
        category: 'Ventanas',
        price: 3500,
        description: 'Ventanas corredizas de alta resistencia, que se mueven las 2 hojas y tela, y diseño moderno. Con material de aluminio color blanco, arco diseño colonial.',
        img: 'img/arco.jpg'
    },
    // ------------------------------------
    // --- VENTANAS (Ventanas Celosías y Otros) ---
    // ------------------------------------
    {
        id: 105,
        name: 'Ventanas Celosía Normal',
        category: 'Ventanas',
        price: 1800,
        description: 'Diseños elegantes que permiten la ventilación y el paso de la luz. Contiene medida estándar, tela fija y abren las celosías.',
        img: 'img/celosia.jpg'
    },
    {
        id: 106,
        name: 'Ventanas Celosía Doble',
        category: 'Ventanas',
        price: 1500,
        description: 'Diseños elegantes que permiten la ventilación y el paso de la luz. Contiene medida estándar, 2 telas fijas y abren las celosías.',
        img: 'img/doble.jpg'
    },
    {
        id: 107,
        name: 'Ventanas Celosía con Vidrio Fijo',
        category: 'Ventanas',
        price: 2400,
        description: 'Contiene medida estándar, 1 vidrio fijo, 2 telas fijas y abren las celosías.',
        img: 'img/fijo.jpg'
    },
    {
        id: 108,
        name: 'Pulpito',
        category: 'Otros Estilos',
        price: 4000,
        description: 'Diseño de pulpo de vidrio. Estilo Forador para un público presente.',
        img: 'img/pulpito.jpg'
    },

    // ------------------------------------
    // --- PUERTAS ---
    // ------------------------------------
    {
        id: 201,
        name: 'Puerta de Baño Color Dorado',
        category: 'Puertas',
        price: 4000,
        description: 'Puerta de baño con detalles en color dorado para un acabado lujoso.',
        img: 'img/baño-dorado.jpg'
    },
    {
        id: 202,
        name: 'Puerta de Baño Color Natural',
        category: 'Puertas',
        price: 4100,
        description: 'Puerta de baño con acabado en color natural y herrajes básicos.',
        img: 'img/baño-natural.jpg'
    },
    {
        id: 203,
        name: 'Puerta de Baño Sencilla',
        category: 'Puertas',
        price: 400,
        description: 'Puerta sencilla y funcional para baños, ideal para espacios reducidos.',
        img: 'img/baño-sencilla.jpg'
    },
    {
        id: 204,
        name: 'Puerta de Baño tipo L',
        category: 'Puertas',
        price: 4500,
        description: 'Diseño especial tipo L para duchas de esquina.',
        img: 'img/tipo-L.jpg'
    },
    {
        id: 205,
        name: 'Puerta de Vidrio Abatible Personal de casa',
        category: 'Puertas',
        price: 10500,
        description: 'Puerta personal con más detalle en estilo de aluminio.',
        img: 'img/puerta-casa-personal.jpg'
    },
    {
        id: 206,
        name: 'Puerta Abatible Para Negocios',
        category: 'Puertas',
        price: 12000,
        description: 'Puerta de negocio con más detalle de estilo en aluminio, ideal para entradas principales.',
        img: 'img/negocio.jpg'
    },

    // ------------------------------------
    // --- VITRINAS ---
    // ------------------------------------
    {
        id: 301,
        name: 'Vitrina tipo horizontal',
        category: 'Vitrinas',
        price: 8500,
        description: 'Perfectas para exhibir tus productos con más anchura y espacio en cada cobertura de los entrepaños y puertas.',
        img: 'img/horizontal.jpg'
    },
    {
        id: 302,
        name: 'Vitrina tipo vertical',
        category: 'Vitrinas',
        price: 8500,
        description: 'Diseños funcionales y atractivos para cualquier negocio. Perfectas para exhibir tus productos con estilo.',
        img: 'img/vertical.png'
    },
    {
        id: 303,
        name: 'Vitrina tipo pollera',
        category: 'Vitrinas',
        price: 7500,
        description: 'Perfectas para exhibir tus productos de comida caliente o refrigerada (Pollos, etc.).',
        img: 'img/pollera.jpg'
    },
    {
        id: 304,
        name: 'Vitrina tipo frutera',
        category: 'Vitrinas',
        price: 6000,
        description: 'Diseños funcionales y atractivos para cualquier negocio, ideal para exhibir frutas y vegetales.',
        img: 'img/frutera.jpg'
    },

    // ------------------------------------
    // --- OTROS ESTILOS ---
    // ------------------------------------
    {
        id: 401,
        name: 'Confitera de Vidrio',
        category: 'Otros Estilos',
        price: 6000,
        description: 'Elaboración para suministros de productos. Confitera diseñada con vidrios color claro sencillo con diferentes espacios.',
        img: 'img/confitera.jpg'
    },
    {
        id: 402,
        name: 'Colores del Material Opcional',
        category: 'Otros Estilos',
        price: 0,
        description: 'Muestra de los diferentes estilos del color del material en aluminio al gusto seleccionado por parte del cliente.',
        img: 'img/material.jpg'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartModal = document.getElementById('cart-modal');
const paymentModal = document.getElementById('payment-modal');
// Variable correcta para el modal de detalle
const productDetailModal = document.getElementById('product-detail-modal');

// =======================================================
// === 2. RENDERIZADO DEL CATÁLOGO ========================
// =======================================================

function renderProducts() {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) return;

    productContainer.innerHTML = '';

    const categories = allProducts.reduce((acc, p) => {
        const categoryKey = p.category;
        if (!acc[categoryKey]) acc[categoryKey] = [];
        acc[categoryKey].push(p);
        return acc;
    }, {});

    for (const category in categories) {
        const categoryHeader = document.createElement('h2');
        categoryHeader.className = 'category-heading';
        categoryHeader.innerText = category.toUpperCase();
        productContainer.appendChild(categoryHeader);

        const container = document.createElement('div');
        container.className = 'product-container';

        categories[category].forEach(p => {
            const div = document.createElement('div');
            div.className = 'card';
            div.setAttribute('data-id', p.id);
            // ⭐ AQUI ESTÁ EL ONCLICK CORRECTO PARA LA IMAGEN ⭐
            div.innerHTML = `
                <img src="${p.img}" alt="${p.name}" onclick="showProductDetail(${p.id})">
                <div class="card-content">
                    <h3>${p.name}</h3>
                    <p class="description">${p.description.substring(0, 90)}...</p>
                    <p class="price">Precio: L.${p.price.toFixed(2)}</p>
                    <button class="primary-btn" onclick="addToCart(${p.id})">Añadir al carrito</button>
                </div>
            `;
            container.appendChild(div);
        });
        productContainer.appendChild(container);
    }
}


// =======================================================
// === 3. FUNCIONES DE DETALLE DEL PRODUCTO ================
// =======================================================

/**
 * Muestra el modal con los detalles completos de un producto.
 */
window.showProductDetail = function(id) {
    const product = allProducts.find(p => p.id === id);
    const detailContent = document.getElementById('product-detail-content');

    if (!product || !detailContent) return;

    detailContent.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="detail-info">
            <h2>${product.name}</h2>
            <p class="category">Categoría: ${product.category}</p>
            <p>${product.description}</p>
            <p class="price">Precio: L.${product.price.toFixed(2)}</p>
            <button class="primary-btn" onclick="addToCart(${product.id}); closeProductModal()">
                Añadir al carrito
            </button>
        </div>
    `;

    // ⭐ LINEA CLAVE: Asegura que el modal se muestre.
    if (productDetailModal) {
        productDetailModal.style.display = 'block';
    }
};

/**
 * Cierra el modal de detalle del producto.
 */
window.closeProductModal = function() {
    if (productDetailModal) {
        productDetailModal.style.display = 'none';
    }
};


// =======================================================
// === 4. FUNCIONES DE CARRITO (Lógica de Precios y Suma) ===
// =======================================================

/**
 * Añade una cantidad específica de un producto al carrito.
 */
window.addToCart = function(id, qty = 1) {
    const prod = allProducts.find(p => p.id === id);
    if (!prod) return;

    const exist = cart.find(c => c.id === id);

    if (prod.price <= 0 && prod.id !== 402) {
        alert(`"${prod.name}" no se puede añadir directamente al carrito. Es un producto de demostración.`);
        return;
    }

    if (exist) {
        exist.qty += qty;
    } else {
        cart.push({...prod, qty: qty });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

/**
 * Actualiza la cantidad de un producto en el carrito y recalcula totales.
 */
window.updateItemQuantity = function(id, change) {
    const itemIndex = cart.findIndex(c => c.id === id);

    if (itemIndex > -1) {
        const newQty = cart[itemIndex].qty + change;

        if (newQty > 0) {
            cart[itemIndex].qty = newQty;
        } else {
            // Eliminar si la cantidad llega a cero
            cart.splice(itemIndex, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    renderCart(); // Vuelve a renderizar la lista en el modal
}

/**
 * Elimina un producto por completo del carrito.
 */
window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    renderCart(); // Vuelve a renderizar la lista en el modal
}

/**
 * Vacía el carrito por completo.
 */
window.clearCart = function() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartUI();
    renderCart();
    cartModal.style.display = 'none';
    alert('El carrito ha sido vaciado.');
}

/**
 * Renderiza el contenido detallado del carrito en el #cart-modal.
 */
function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    const subtotalDisplay = document.getElementById('cart-subtotal');
    const totalDisplay = document.getElementById('modal-cart-total');

    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = '<p style="text-align: center; color: #888;">El carrito está vacío. ¡Añade productos!</p>';
        subtotalDisplay.innerText = 'L.0.00';
        totalDisplay.innerText = 'L.0.00';
        // Deshabilita el botón de proceder al pago si el carrito está vacío
        document.getElementById('go-to-payment-btn').disabled = true;
        return;
    }

    let itemsHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        itemsHTML += `
            <div class="cart-item-row">
                <span class="item-name">${item.name} (L.${item.price.toFixed(2)})</span>
                <div class="item-quantity-control">
                    <button class="qty-btn" onclick="updateItemQuantity(${item.id}, -1)">-</button>
                    <span class="item-qty-display">${item.qty}</span>
                    <button class="qty-btn" onclick="updateItemQuantity(${item.id}, 1)">+</button>
                </div>
                <span class="item-price-total">L.${itemTotal.toFixed(2)}</span>
                <button class="qty-btn secondary-btn" onclick="removeFromCart(${item.id})">x</button>
            </div>
        `;
    });

    cartList.innerHTML = itemsHTML;
    subtotalDisplay.innerText = `L.${subtotal.toFixed(2)}`;
    totalDisplay.innerText = `L.${subtotal.toFixed(2)}`;

    document.getElementById('go-to-payment-btn').disabled = false;
}


/**
 * Actualiza los contadores en el encabezado y en el modal de pago.
 */
function updateCartUI() {
    const count = cart.reduce((s, c) => s + c.qty, 0);
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const formattedTotal = total.toFixed(2);

    // Encabezado Flotante
    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-total').innerText = formattedTotal;

    // Modal de Pago
    const totalElements = document.querySelectorAll('#payment-modal-total, #pay-btn-total');
    totalElements.forEach(el => el.innerText = formattedTotal);

    // Actualiza el texto del botón Confirmar Pedido
    const btnPay = document.getElementById('pay-btn');
    if (btnPay) {
        btnPay.innerText = `Confirmar y Enviar Pedido L.${formattedTotal}`;
    }

    renderCheckoutCart(total);
}

/**
 * Renderiza la lista resumida de productos en el modal de pago (Checkout).
 */
function renderCheckoutCart(total) {
    const checkoutList = document.getElementById('checkout-cart-items-list');
    if (!checkoutList) return;

    if (cart.length === 0) {
        checkoutList.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    checkoutList.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 2px 0;">
            <span>${item.name} (x${item.qty})</span>
            <strong>L.${(item.price * item.qty).toFixed(2)}</strong>
        </div>
    `).join('');
}


// =======================================================
// === 5. LÓGICA DE MODALES Y ENVÍO DE PEDIDO (MAILTO) ===
// =======================================================

const btnGoToPayment = document.getElementById('go-to-payment-btn');
const btnClearCart = document.getElementById('clear-cart-btn');
const btnPay = document.getElementById('pay-btn'); // Botón de Confirmar Pedido


// --- Control de Modales ---

// Abrir Modal del Carrito al hacer clic en el flotante
document.getElementById('cart-float').onclick = () => {
    renderCart();
    cartModal.style.display = 'block';
};

// Cerrar Modal del Carrito
document.querySelector('.close-cart').onclick = () => cartModal.style.display = 'none';

// Cerrar Modal de Pago
document.querySelector('.close-payment').onclick = () => paymentModal.style.display = 'none';

// Cierra cualquier modal si se hace click fuera 
window.onclick = (e) => {
    if (e.target == cartModal) cartModal.style.display = 'none';
    if (e.target == paymentModal) paymentModal.style.display = 'none';
    // Cierre del modal de detalle
    if (e.target == productDetailModal) productDetailModal.style.display = 'none';
};

// Botón "Proceder a Solicitud"
if (btnGoToPayment) {
    btnGoToPayment.onclick = () => {
        if (cart.length === 0) return;

        cartModal.style.display = 'none';
        paymentModal.style.display = 'block';
    };
}


// Botón "Vaciar Carrito"
if (btnClearCart) {
    btnClearCart.onclick = () => clearCart();
}


// --- Lógica de Envío de Pedido (Usando mailto: SIN BACKEND) ---

if (btnPay) {
    btnPay.onclick = () => {
        // ⭐ 1. CAPTURAR VALORES DE INPUTS ⭐
        const name = document.getElementById('buyerName').value;
        const email = document.getElementById('buyerEmail').value;
        const phone = document.getElementById('buyerPhone').value; // <-- Aquí se captura el teléfono

        // **IMPORTANTE: Cambia esta dirección por el correo fijo de tu empresa**
        const recipientEmail = 'carloscruz197527@gmail.com';

        // 2. Validaciones
        if (!name || !email || !phone) {
            alert('ERROR: Complete el Nombre, Correo Electrónico y el Teléfono para enviar el pedido.');
            return;
        }

        if (cart.length === 0) {
            alert('El carrito está vacío. Añade productos para continuar.');
            return;
        }

        // 3. Construir el cuerpo del mensaje
        const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

        let emailBody = `¡Hola Vidriería Lopez!\n\n`;
        emailBody += `Tengo interés en realizar un pedido con los siguientes productos. Por favor, contáctenme para confirmar disponibilidad y método de pago.\n\n`;
        emailBody += `--- DATOS DEL CLIENTE ---\n`;
        emailBody += `Nombre: ${name}\n`;
        emailBody += `Correo: ${email}\n`;
        // ⭐ LÍNEA CLAVE: El teléfono se añade al cuerpo del correo ⭐
        emailBody += `Teléfono: ${phone}\n\n`;
        emailBody += `--- DETALLE DEL PEDIDO ---\n`;

        cart.forEach(item => {
            emailBody += `- ${item.name} (x${item.qty}) - Subtotal: L.${(item.price * item.qty).toFixed(2)}\n`;
        });

        emailBody += `\nTOTAL ESTIMADO: L.${total.toFixed(2)}\n`;
        emailBody += `\nGracias.`;


        // 4. Crear el enlace mailto:
        const subject = encodeURIComponent(`NUEVO PEDIDO WEB - Cliente: ${name}`);
        const body = encodeURIComponent(emailBody);

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // 5. Abrir el cliente de correo del usuario
        window.location.href = mailtoLink;

        // 6. Retroalimentación y limpieza
        setTimeout(() => {
            alert('Su pedido ha sido preparado. Su aplicación de correo se abrirá para que pueda ENVIAR el mensaje. ¡Recuerde presionar ENVIAR en su correo!');

            // Vaciar carrito
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            paymentModal.style.display = 'none';
        }, 100);
    };
}

// =======================================================
// === 6. INICIALIZACIÓN =================================
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // Ejecución inicial para cargar productos y carrito
    renderProducts();
    updateCartUI();
});

