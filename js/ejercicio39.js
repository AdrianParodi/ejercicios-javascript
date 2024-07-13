// 39) Necesitamos darle colores aleatorios al body apretando la barra espaciadora. Para eso modificaremos su color de fondo utilizando el formato rgb(0,0,0) donde los valores r, g y b deben generarse aleatoriamente con valores entre 1 y 255.

let body = document.querySelector("body")
let valorColor = document.querySelector("#valorColor")

// Creamos el vector de color aleatorio rgb

function CambiarColorBody(){
    let rgb = []
    for (i=0; i<3; i++){
        let aleatorio = Math.ceil(Math.random()*255)
        rgb.push(aleatorio)
    }
    let color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    
    document.body.style.backgroundColor=color
    valorColor.textContent = color
}

document.addEventListener("keydown", 
    (event)=>{
    if(event.key === " "){CambiarColorBody()}
    }
)