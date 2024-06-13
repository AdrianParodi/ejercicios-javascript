// Ejercicio 3: Determinación de Números Primos
// Descripción: Determina si un número entero es primo.

// Instrucciones:

// Declara una variable para un número entero.
// Usa una sentencia if y un bucle para determinar si el número es primo.
// Muestra el resultado en la consola.

let n=13
let mensaje3 = " "

for (let i=2 ; i < n; i++){
    resto = n%i
    if (resto == 0){
        mensaje3= "es primo" 
        break  // si el numero es primo ya no sigo el bucle for
    }

    else{
        mensaje3= "no es primo"
    }

}

console.log(`El numero ${n} ${mensaje3}`);


