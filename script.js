// Función para mostrar la imagen en pantalla completa
function mostrarImagen() {
    var imagenEnPantallaCompleta = document.getElementById("imagen-en-pantalla-completa");
    imagenEnPantallaCompleta.style.display = "block";
}

// Función para cerrar la imagen en pantalla completa
function cerrarImagen() {
    var imagenEnPantallaCompleta = document.getElementById("imagen-en-pantalla-completa");
    imagenEnPantallaCompleta.style.display = "none";
}

// Agregar un manejador de eventos al enlace para mostrar la imagen
var enlaceMostrarImagen = document.getElementById("mostrar-imagen");
enlaceMostrarImagen.addEventListener("click", mostrarImagen);