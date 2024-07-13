// Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

let letras = ['hola', 'pua ', 'mundo', ' cargo ', 'loco']

function concatenar(string_array){
    let salida =""
    for (let string of string_array){salida = salida + string}
    console.log(salida)
}

concatenar(letras)