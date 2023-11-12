// index.js
// Objeto para almacenar el carrito
let carrito = [];

// Esta es la función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    const producto = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);

    // Actualizar la interfaz del carrito
    actualizarCarrito();
}

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');

    // Limpiar la lista antes de actualizar
    listaCarrito.innerHTML = '';

    let total = 0;

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(listItem);

        total += producto.precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}

// Función para realizar la compra
function comprar() {
    alert('¡Gracias por la compra! Total: $' + document.getElementById('totalCarrito').textContent);

    // Limpiar el carrito después de la compra
    vaciarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];

    // Actualizar la interfaz del carrito
    actualizarCarrito();
}
