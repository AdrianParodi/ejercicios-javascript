// Ejercicio 2: Calculo del IMC
// Descripción: Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.

// Instrucciones:

// Declara variables para el peso (en kilogramos) y la altura (en metros) de una persona.
// Calcula el IMC usando la fórmula 
// IMC=altura2peso​.
// Usa una sentencia if para clasificar el IMC como bajo peso (< 18.5),
//  normal (18.5 - 24.9), 
//  sobrepeso (25 - 29.9) 
//  u obesidad (>= 30).
// Muestra el resultado en la consola.

let peso = 78 //kg
let altura = 1.78 //m

let imc = peso / Math.pow(altura,2)
let mensaje2 = " "

if (imc<18.5){
    mensaje2 = "Peso bajo"
}

else if(imc>=18.5 && imc<25){
    mensaje2 = "Normal"
}

else if(imc>=25 && imc < 30){
    mensaje2 = "Sobrepeso"
}

else{
    mensaje2 = "Obesidad"
}


console.log(`El IMC es ${imc}, por lo tanto, indica ${mensaje2}`)