// 7) Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado

let palabras = ["julio", "carpa", "magia", "colorado", "caramba", "papa", "magia", "laca"]

function buscarPalabra(arrayStrings, stringBuscado){
    let longArray = arrayStrings.length
    let contador = 0 

    for(let i=0; i<longArray; i++){
        if(arrayStrings[i].includes(stringBuscado)){
            contador ++
        }
    }
    return contador
}


let repeticionesPalabra = buscarPalabra(palabras, "ca")
console.log(repeticionesPalabra)