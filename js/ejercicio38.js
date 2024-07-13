// 38)Vamos a crear una página que inicialmente cuente con 5 imágenes:
// las cuatro primeras imágenes tendrán 100px de alto;
// la última deberá tener 500pxde alto.
// Al clickear una imagen de 100px se actualiza a 500px y la que anteriormente tenía 500px se actualiza a 100px.

// let imagen100 = document.querySelectorAll(".img100")
let imagenes = document.querySelectorAll("img")

function changeSize(event){
    // La imagen seleccionada viene del click en la pagina
    let imagenSeleccionada = event.target
    let currentImagenAlta = document.querySelector(".img500")

    // Agrando la imagen seleccionada
    if (imagenSeleccionada !== currentImagenAlta) {
        imagenSeleccionada.classList.remove("img100");
        imagenSeleccionada.classList.add("img500");
        
        //Si clickeo la imagen grande (y existe), esta se achica    
        if (currentImagenAlta) {
            currentImagenAlta.classList.remove("img500");
            currentImagenAlta.classList.add("img100");
        }
    
    } 

    // Si seleccioné la imagen grande, esta se achica
    else {
        imagenSeleccionada.classList.remove("img500");
        imagenSeleccionada.classList.add("img100");
    }
}

imagenes.forEach(imagen => {imagen.addEventListener("click", changeSize)})