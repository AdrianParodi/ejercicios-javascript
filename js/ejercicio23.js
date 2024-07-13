// 23)Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

let array = [1,1,1,4]

gano = (array)=>{
    coincidencia_total = true
    let longitud = array.length

    for (let i=0; i<longitud; i++){
        if(array[i] != array[0]){
            coincidencia_total = false
            return coincidencia_total
        }
    }
    return coincidencia_total
}

console.log(gano(array))