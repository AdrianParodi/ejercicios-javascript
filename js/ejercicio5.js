// Ejercicio 5: Cálculo del Descuento
// Descripción: Calcula el precio final de un producto aplicando un descuento basado en su precio inicial.

// Instrucciones:

// Declara una variable para el precio inicial del producto.
// Usa sentencias if para aplicar un 10% de descuento si el precio es mayor a 100, un 5% si está entre 50 y 100, y sin descuento si es menor a 50.
// Calcula el precio final y muestra el resultado en la consola.

let precio = 49
let resultado5 = 0
let descuento = 0

if (precio>100){
    descuento = 0.1
}
else if(precio>=50){
    descuento = 0.05
}
else{
    descuento = 0
}

resultado5 = precio*(1-descuento)

console.log(`El precio inicial es de ${precio} y con el descuento del ${descuento*100}% el precio final queda en $${resultado5}`)