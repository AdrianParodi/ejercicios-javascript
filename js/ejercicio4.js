// Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

function suma_pares(array){
    let suma_par = 0
    for (let numero of array){
        if(numero%2 == 0){ suma_par=suma_par+numero}
    }
    return suma_par
}

numeros = [4, 58, 3, 24, 27, 34, 12, 8, 13, 7, 100]

let pares_sumados = suma_pares(numeros)

console.log(`La suma de pares da ${pares_sumados}`)
