/* Improved cart.js - client-side cart with drawer, dashboard helpers, orders, and simulated catalog removal */
const ORDER_EMAIL = "carloscruz197527@gmail.com"; // Change to your email
const CART_KEY = "vidreria_cart_v2";
const ORDERS_KEY = "vidreria_orders_v2";
const REMOVED_PROD_KEY = "vidreria_removed_products_v1";

function loadCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } }

function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

function loadOrders() { try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch (e) { return []; } }

function saveOrders(o) { localStorage.setItem(ORDERS_KEY, JSON.stringify(o)); }

function loadRemoved() { try { return JSON.parse(localStorage.getItem(REMOVED_PROD_KEY)) || []; } catch (e) { return []; } }

function saveRemoved(list) { localStorage.setItem(REMOVED_PROD_KEY, JSON.stringify(list)); }

function addToCart(product) {
    const cart = loadCart();
    const existing = cart.find(p => p.id === product.id);
    if (existing) { existing.qty = (existing.qty || 1) + (product.qty || 1); } else { cart.push({...product, qty: product.qty || 1 }); }
    saveCart(cart);
    renderCartCount();
    renderCartDrawer();
}

function removeFromCart(id) {
    let cart = loadCart();
    cart = cart.filter(p => p.id !== id);
    saveCart(cart);
    renderCartCount();
    renderCartDrawer();
}

function updateQty(id, qty) {
    const cart = loadCart();
    const it = cart.find(p => p.id === id);
    if (it) { it.qty = Math.max(1, parseInt(qty) || 1);
        saveCart(cart);
        renderCartDrawer();
        renderCartCount(); }
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
    renderCartCount();
    renderCartDrawer();
}

function cartTotal() {
    const cart = loadCart();
    return cart.reduce((s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 1), 0);
}

function renderCartCount() {
    const cart = loadCart();
    const total = cart.reduce((s, it) => s + (it.qty || 0), 0);
    document.querySelectorAll(".cart-count").forEach(el => el.textContent = total);
    // update floating badge
    const badge = document.getElementById("cart-badge-count");
    if (badge) badge.textContent = total;
}

function renderCartDrawer() {
    const container = document.getElementById("cart-drawer");
    if (!container) return;
    const cart = loadCart();
    if (cart.length === 0) {
        container.innerHTML = `<div class="drawer-header"><h3>Carrito (simulado)</h3><button onclick="toggleCartDrawer()">Cerrar</button></div><div style="padding:12px">Carrito vacío.</div>`;
        return;
    }
    let html = `<div class="drawer-header"><h3>Carrito (simulado)</h3><button onclick="toggleCartDrawer()">Cerrar</button></div>`;
    html += `<div class="drawer-body"><table style="width:100%"><thead><tr><th>Producto</th><th>Precio</th><th>Cant.</th><th>Total</th><th></th></tr></thead><tbody>`;
    cart.forEach(it => {
        const line = (Number(it.price) || 0) * (Number(it.qty) || 1);
        html += `<tr>
      <td style="max-width:200px">${it.name}</td>
      <td>L. ${(Number(it.price)||0).toFixed(2)}</td>
      <td><input type="number" min="1" value="${it.qty}" onchange="updateQty('${it.id}', this.value)" style="width:60px"/></td>
      <td>L. ${line.toFixed(2)}</td>
      <td><button onclick="removeFromCart('${it.id}')">Eliminar</button></td>
    </tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<div class="drawer-footer"><strong>Total: L. ${cartTotal().toFixed(2)}</strong><div style="margin-top:8px"><button onclick="checkout()">Enviar pedido (simulado)</button> <button onclick="clearCart()">Vaciar</button></div></div>`;
    container.innerHTML = html;
}

function toggleCartDrawer() {
    const d = document.getElementById("cart-drawer");
    if (!d) return;
    d.classList.toggle("open");
    if (d.classList.contains("open")) { renderCartDrawer(); } // render when opened
}

function checkout() {
    const cart = loadCart();
    if (cart.length === 0) { alert("El carrito está vacío."); return; }
    const total = cartTotal();
    // build mailto body (URL encoded)
    let body = "Pedido%20simulado%0A%0A";
    cart.forEach(it => {
        body += `- ${encodeURIComponent(it.name)} | Cantidad: ${it.qty} | Precio uni: L.${(Number(it.price)||0).toFixed(2)}%0A`;
    });
    body += `%0ATotal: L.${total.toFixed(2)}%0A%0A--%0APedido generado (simulado) desde el sitio.`;
    const subject = encodeURIComponent("Nuevo pedido - Simulado");
    const mailto = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    // save simulated order
    const orders = loadOrders();
    const id = "ORD-" + Date.now();
    const order = { id, date: new Date().toISOString(), items: cart, total };
    orders.push(order);
    saveOrders(orders);
    // open mail client
    window.location.href = mailto;
    // show small confirmation area if present
    const conf = document.getElementById("order-confirmation");
    if (conf) {
        conf.innerHTML = `<div class="order-box"><h4>Pedido simulado creado</h4><p>ID: ${id}</p><p>Total: L. ${total.toFixed(2)}</p><p><a id="download-order" href="#">Descargar JSON</a></p></div>`;
        const a = document.getElementById("download-order");
        a.onclick = function(e) {
            e.preventDefault();
            const blob = new Blob([JSON.stringify(order, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${id}.json`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        };
    } else {
        alert("Pedido simulado creado y cliente de correo abierto.");
    }
    // Optionally clear cart after checkout simulation
    clearCart();
    renderCartCount();
    renderCartDrawer();
    renderDashboardIfPresent();
}

// Catalog / product removal (simulated)
function removeProductFromCatalog(id) {
    const removed = loadRemoved();
    if (!removed.includes(id)) removed.push(id);
    saveRemoved(removed);
    // Re-render products if page has renderProducts function (defined in products page)
    if (typeof renderProducts === "function") renderProducts();
    renderDashboardIfPresent();
}

function restoreProductToCatalog(id) {
    let removed = loadRemoved();
    removed = removed.filter(x => x !== id);
    saveRemoved(removed);
    if (typeof renderProducts === "function") renderProducts();
    renderDashboardIfPresent();
}

// Dashboard render helper (if on dashboard page)
function renderDashboardIfPresent() {
    const el = document.getElementById("dashboard-root");
    if (!el) return;
    const cart = loadCart();
    const orders = loadOrders();
    const removed = loadRemoved();
    el.innerHTML = `<h2>Dashboard (simulado)</h2>
    <div class="dash-grid">
      <div class="card"><h3>Carrito</h3><p>Items: ${cart.reduce((s,i)=>s+(i.qty||0),0)}</p><p>Total: L. ${cartTotal().toFixed(2)}</p><p><button onclick="toggleCartDrawer()">Ver Carrito</button> <button onclick="clearCart()">Vaciar Carrito</button></p></div>
      <div class="card"><h3>Pedidos simulados</h3><p>Total pedidos: ${orders.length}</p><p><button onclick="downloadOrders()">Descargar pedidos (JSON)</button></p></div>
      <div class="card"><h3>Productos removidos</h3><p>${removed.length} productos</p>${removed.length?('<p><button onclick="restoreAllRemoved()">Restaurar todos</button></p>'):''}</div>
    </div>
    <div style="margin-top:12px"><h4>Pedidos recientes</h4>${orders.slice(-5).reverse().map(o=>`<div class="order-row"><strong>${o.id}</strong> - ${new Date(o.date).toLocaleString()} - L. ${Number(o.total).toFixed(2)}</div>`).join("") || "<p>No hay pedidos.</p>"}</div>
  `;
}

function downloadOrders(){
  const orders = loadOrders();
  const blob = new Blob([JSON.stringify(orders, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = "orders.json"; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function restoreAllRemoved(){
  saveRemoved([]);
  if(typeof renderProducts === "function") renderProducts();
  renderDashboardIfPresent();
}

// Init UI features: floating cart button, drawer container if not exist
function ensureUI(){
  // floating button
  if(!document.getElementById("floating-cart-btn")){
    const btn = document.createElement("button");
    btn.id = "floating-cart-btn";
    btn.innerHTML = `🛒 <span id="cart-badge-count">0</span>`;
    btn.onclick = toggleCartDrawer;
    document.body.appendChild(btn);
  }
  // drawer container
  if(!document.getElementById("cart-drawer")){
    const d = document.createElement("div");
    d.id = "cart-drawer";
    document.body.appendChild(d);
  }
  // order confirmation area
  if(!document.getElementById("order-confirmation")){
    const c = document.createElement("div");
    c.id = "order-confirmation";
    c.style.position = "fixed"; c.style.right = "12px"; c.style.bottom = "80px"; c.style.zIndex = "9999";
    document.body.appendChild(c);
  }
}

window.addEventListener("DOMContentLoaded", function(){
  ensureUI();
  renderCartCount();
  renderCartDrawer();
  // Attach add-to-cart buttons if present
  document.querySelectorAll("[data-add-to-cart]").forEach(btn=>{
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const pdata = this.getAttribute("data-product");
      if(!pdata) return;
      try{
        const p = JSON.parse(pdata);
        addToCart(p);
      }catch(err){ console.error("Invalid product JSON", err); }
    });
  });
  // Attach remove-from-catalog buttons if present
  document.querySelectorAll("[data-remove-product]").forEach(btn=>{
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const id = this.getAttribute("data-remove-product");
      if(!id) return;
      if(confirm("¿Simular eliminar este producto del catálogo?")) removeProductFromCatalog(id);
    });
  });
});
