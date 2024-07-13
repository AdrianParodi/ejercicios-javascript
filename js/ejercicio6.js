// Dado un array de nombres y un nombreDeLista, se deberá crear una función llamada crearLista que retorne un string con el siguiente formato.

// Lista de (nombreDeLista):
// 1) juan
// 2) pepe
// 3) maria 

let nombres = ["Juan", "Adrian", "Pepa", "Eve"]
let listaDe = ""

function crearLista(lista, nombreDeLista){
    let length = lista.length
    listaDe = `Lista de ${nombreDeLista}:\n`
    
    for(i=0; i<=length-1; i++){
        listaDe = listaDe + `\t${i+1}) ${nombres[i]}\n`
    }

    return listaDe
}

let listado = crearLista(nombres, "Adrian")
console.log(listado)
console.log("fin")

// nombres.forEach(function(nombre,index,array){
//     console.log(index)
// })