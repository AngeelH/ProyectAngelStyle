document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del formulario de contacto
    const formularioContacto = document.getElementById('formulario-contacto');

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        formularioContacto.reset();
    });

    // Funcionalidad de los botones de compra
    const botonesCompra = document.querySelectorAll('.btn-comprar');
    let carrito = [];

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoId = this.dataset.id;
            const producto = this.closest('.producto');
            const nombre = producto.querySelector('h3').textContent;
            const precio = producto.querySelector('.precio').textContent;

            carrito.push({ id: productoId, nombre: nombre, precio: precio });
            alert('Producto agregado al carrito.');
        });
    });

    // Funcionalidad del menú de navegación en dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Animaciones de hover en productos
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        producto.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        producto.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Funcionalidad del formulario de inicio de sesión
    const formularioLogin = document.getElementById('formulario-login');

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Inicio de sesión exitoso.');
        formularioLogin.reset();
    });

    // Funcionalidad del carrito de compras (ejemplo básico)
    const carritoIcon = document.querySelector('#carrito');

    carritoIcon.addEventListener('click', function() {
        if (carrito.length > 0) {
            let mensajeCarrito = 'Productos en el carrito:\n';
            carrito.forEach(producto => {
                mensajeCarrito += `${producto.nombre} - ${producto.precio}\n`;
            });
            alert(mensajeCarrito);
        } else {
            alert('El carrito está vacío.');
        }
    });

    // Funcionalidad de las colecciones
    const colecciones = document.querySelectorAll('.coleccion');

    colecciones.forEach(coleccion => {
        coleccion.addEventListener('click', function() {
            alert(`Has seleccionado la colección: ${this.querySelector('h3').textContent}`);
        });
    });

    // Funcionalidad del blog
    const articulos = document.querySelectorAll('.articulo');

    articulos.forEach(articulo => {
        articulo.addEventListener('click', function() {
            alert(`Has seleccionado el artículo: ${this.querySelector('h3').textContent}`);
        });
    });

    // Animaciones de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad de validación de formulario de contacto
    formularioContacto.addEventListener('submit', function(event) {
        let nombre = formularioContacto.querySelector('input[type="text"]').value;
        let email = formularioContacto.querySelector('input[type="email"]').value;
        let mensaje = formularioContacto.querySelector('textarea').value;

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, completa todos los campos del formulario.');
            event.preventDefault();
        } else {
            alert('Mensaje enviado. ¡Gracias por contactarnos!');
            formularioContacto.reset();
        }
    });
});