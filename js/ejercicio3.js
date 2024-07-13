// Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

function mayor10(array){
    let array_mayor10 = []

    for(let numero of array){
        if (numero > 10) {array_mayor10.push(numero)}
        }
    return array_mayor10
}

let numeros = [10, 50, 45, 8, 4, -5, 33]

let mayores_10 = mayor10(numeros)

console.log(`El array original es: ${numeros}. \nEl resultado es: ${mayores_10}`)