// Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.


function limpiarElemento(stringArray, stringEliminar){
    let nuevo_array = []
    let indice = stringArray.indexOf(stringEliminar)
    if (indice != -1) {
        let izquierda = stringArray.slice(0,indice)
        let derecha = stringArray.slice(indice+1, stringArray.length)

        for(i=0; i<izquierda.length; i++){
            nuevo_array.push(izquierda[i])
        }

        for(j=0; j<derecha.length; j++){
            nuevo_array.push(derecha[j])
        }

        console.log(nuevo_array)     
    }
    else{console.log(null)}
}

let palabras = ["hola", "mundo", "loco", "y", "groso"]
limpiarElemento(palabras, "groso")