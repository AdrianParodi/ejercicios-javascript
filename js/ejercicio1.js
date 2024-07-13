//1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.

let numeros = [1,2,3,5,6,7,8,9]

// console.log(numeros)
let acumulador=0

numeros.forEach(function(element) {
    acumulador = acumulador + element
    // No hace falta retornar acumulador, ya que esta variable
    // está definida en el mismo ambito que la funcion pasada a forEach
});


console.log(`acumulador vale ${acumulador}`)