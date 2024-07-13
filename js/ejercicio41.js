// 41)A partir de un array de bandas queremos saber si están activas o no 
document.addEventListener("DOMContentLoaded", function() {

prueba = document.querySelector("#prueba")
let string = "";

let bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];


function esActiva(array){
    for (let element of array){
        if (element.activa){
            // console.log(`${element.nombre} está activa desde ${element.fundacion}`)
            string += `${element.nombre} está activa desde ${element.fundacion} <br>`
        }
        else {
            // console.log(`${element.nombre} no está activa`)
            string += `${element.nombre} no está activa <br>`
        }
    }
    prueba.innerHTML = string
}

esActiva(bandas)
})

