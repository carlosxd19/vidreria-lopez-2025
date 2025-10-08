Cambios realizados (simulación de carrito y envío por correo sin servidor):

- Se ha movido/neutralizado la carpeta 'backend' si existía (moved to backend_removed).
- Se añadió js/cart.js que implementa un carrito en el cliente usando localStorage.
- Se añadió cart.html para revisar el carrito.
- Se añadió/actualizó products.html para mostrar productos con botón 'Ver detalle' y 'Agregar'.
- El envío de pedido es simulado: al presionar 'Enviar pedido (simulado)' se abrirá el cliente de correo
  (mailto:) con el email destino pedido@ejemplo.com. Cambie ORDER_EMAIL en js/cart.js.
- Se guarda un historial simulado de pedidos en localStorage (clave vidreria_orders).

Instrucciones para personalizar:
- Editar js/cart.js y cambiar ORDER_EMAIL a su correo real.
- Si desea integrar un servicio de formularios (Formspree, Netlify Forms, etc.), reemplazar la función checkout().

Nota: La carpeta 'Backend' original fue movida a 'backend_removed'.
