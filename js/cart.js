
// cart.js - client-side cart (uses localStorage)
// Set ORDER_EMAIL to the email that should receive the simulated order (change as needed)
const ORDER_EMAIL = "pedido@ejemplo.com";
const CART_KEY = "vidreria_cart_v1";

function loadCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(product) {
  const cart = loadCart();
  const existing = cart.find(p=>p.id===product.id);
  if(existing){
    existing.qty += product.qty || 1;
  } else {
    cart.push({...product, qty: product.qty || 1});
  }
  saveCart(cart);
  renderCartCount();
  alert("Producto agregado al carrito (simulado).");
}
function removeFromCart(id){
  let cart = loadCart();
  cart = cart.filter(p=>p.id!==id);
  saveCart(cart);
  renderCart();
  renderCartCount();
}
function updateQty(id, qty){
  const cart = loadCart();
  const item = cart.find(p=>p.id===id);
  if(item){
    item.qty = Math.max(1, parseInt(qty)||1);
    saveCart(cart);
    renderCart();
    renderCartCount();
  }
}
function clearCart(){
  localStorage.removeItem(CART_KEY);
  renderCart();
  renderCartCount();
}

function renderCartCount(){
  const cart = loadCart();
  const el = document.querySelectorAll(".cart-count");
  const total = cart.reduce((s,it)=>s+it.qty,0);
  el.forEach(x=>x.textContent = total);
}

function renderCart(containerSelector = "#cart-contents"){
  const cart = loadCart();
  const container = document.querySelector(containerSelector);
  if(!container) return;
  if(cart.length===0){
    container.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }
  let html = `<table class="cart-table"><thead><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Acción</th></tr></thead><tbody>`;
  cart.forEach(it=>{
    const lineTotal = (it.price || 0) * (it.qty || 1);
    html += `<tr>
      <td>${it.name}</td>
      <td>${it.price ? it.price.toFixed(2) : "-"}</td>
      <td><input type="number" min="1" value="${it.qty}" onchange="updateQty('${it.id}', this.value)" /></td>
      <td>${lineTotal.toFixed(2)}</td>
      <td><button onclick="removeFromCart('${it.id}')">Eliminar</button></td>
    </tr>`;
  });
  const total = cart.reduce((s,it)=>s + (it.price||0)*(it.qty||1),0);
  html += `</tbody></table><p><strong>Total:</strong> ${total.toFixed(2)}</p>`;
  html += `<p><button onclick="checkout()">Enviar pedido (simulado)</button> <button onclick="clearCart()">Vaciar carrito</button></p>`;
  container.innerHTML = html;
}

function checkout(){
  const cart = loadCart();
  if(cart.length===0){
    alert("El carrito está vacío.");
    return;
  }
  // Build email body
  let body = "Pedido simulado%0D%0A%0D%0A";
  cart.forEach(it=>{
    body += `- ${encodeURIComponent(it.name)} | Cantidad: ${it.qty} | Precio uni: ${it.price || 0}%0D%0A`;
  });
  const total = cart.reduce((s,it)=>s + (it.price||0)*(it.qty||1),0);
  body += `%0D%0ATotal: ${total.toFixed(2)}%0D%0A%0D%0A--%0D%0APedido generado desde sitio (simulado).`;
  // mailto
  const subject = encodeURIComponent("Nuevo pedido desde sitio - simulado");
  const mailto = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
  // open mail client
  window.location.href = mailto;
  // also show confirmation modal and save as simulated order record
  const order = {id: "ORD-"+Date.now(), date: new Date().toISOString(), items: cart, total};
  const hist = JSON.parse(localStorage.getItem("vidreria_orders")||"[]");
  hist.push(order);
  localStorage.setItem("vidreria_orders", JSON.stringify(hist));
  // show confirmation
  const conf = document.getElementById("order-confirmation");
  if(conf){
    conf.innerHTML = `<h3>Pedido simulado creado</h3><p>ID: ${order.id}</p><pre>${JSON.stringify(order, null, 2)}</pre><p>Puedes descargar el resumen o cerrar.</p><p><a id="download-order" href="#">Descargar resumen</a></p>`;
    const a = document.getElementById("download-order");
    a.onclick = function(e){
      e.preventDefault();
      const blob = new Blob([JSON.stringify(order, null, 2)], {type:"application/json"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${order.id}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    };
  } else {
    alert("Pedido simulado creado. Revisa tu cliente de correo para enviar el email.");
  }
}

window.addEventListener("DOMContentLoaded", function(){
  renderCartCount();
  renderCart();
  // Attach add-to-cart buttons (if present with data-product attribute)
  document.querySelectorAll("[data-add-to-cart]").forEach(btn=>{
    btn.addEventListener("click", function(){
      const pdata = this.getAttribute("data-product");
      if(!pdata) return;
      try{
        const p = JSON.parse(pdata);
        addToCart(p);
      }catch(e){
        console.error("Invalid product JSON", e);
      }
    });
  });
});
