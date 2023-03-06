let carrito = [] ;
let total = 0;

function agregarProducto (nombre, precio) {
    
    const producto = {

        nombre: nombre,
        precio: precio,

    };
    
    carrito.push(producto);

    const listaCarrito = document.getElementById("lista-carrito");
    const elemento = document.createElement("li");
    elemento.innerText = `${nombre} - $${precio}`;
    listaCarrito.appendChild(elemento);

    total += precio;
    const totalCarrito = document.getElementById("total-carrito");
    totalCarrito.innerText = total.toFixed();

}

function finalizarCompra() {
    var total = document.getElementById("total-carrito").innerText;
    localStorage.setItem("compra", "Total: " + total);
    alert("Gracias por su compra. \n\n" + "Total: " + total);
    location.reload();
}