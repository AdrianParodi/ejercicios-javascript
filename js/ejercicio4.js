// Ejercicio 4: Operaciones Aritméticas Básicas
// Descripción: Realiza operaciones aritméticas básicas y muestra el mayor resultado.

// Instrucciones:

// Declara tres variables numéricas.
// Realiza y guarda el resultado de las operaciones de suma, resta y multiplicación entre las variables.
// Usa una sentencia if para determinar y mostrar el mayor de los tres resultados en la consola.


let a = 1
let b = 1
let resultado = 0

let suma = a + b
let resta = a - b
let multiplicación = a*b

if (suma > resta && suma > multiplicación){
    mensaje4 = `La suma entre ${a} y ${b} (${suma}) es mayor que la mutliplicacion ${multiplicación} y que la resta ${resta}`
}

else if (resta > suma && resta > multiplicación){
    mensaje4 = `La resta entre ${a} y ${b} (${resta}) es mayor que la mutliplicacion ${multiplicación} y que la suma ${suma}`}

else{
    mensaje4 = `La multiplicación entre ${a} y ${b} (${multiplicación}) es mayor que la suma ${suma} y que la resta ${resta}`
}

console.log(mensaje4)
