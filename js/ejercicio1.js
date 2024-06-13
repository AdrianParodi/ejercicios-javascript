// Ejercicio 1: Conversión de Temperaturas
// Descripción: Convierte una temperatura dada en grados Celsius a grados
//  Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada.
// Instrucciones:

// Declara una variable para almacenar una temperatura en grados Celsius.
// Calcula la temperatura en grados Fahrenheit usando la fórmula:
// F=C×1.8+32.
// Usa una sentencia if para determinar si la temperatura en Fahrenheit es
//  mayor a 85 (alta), menor a 32 (baja) o moderada.
// Muestra el resultado en la consola.

let temp_celsius = -2
let temp_farenheit = temp_celsius*1.8 + 32
let mensaje = "hola"


if (temp_farenheit < 32){
    mensaje = "Temperatura baja"
}

else if (temp_farenheit >= 32 && temp_farenheit <= 85){
    mensaje = "Temperatura moderada"
}

else{
    mensaje = "Temperatura alta"
}

console.log(mensaje)