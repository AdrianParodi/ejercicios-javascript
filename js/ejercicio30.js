// 30)Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

removerDuplicados = (array)=>{
    let newArray = []
    for(let numero of array){
        if (!newArray.includes(numero)){newArray.push(numero)}
    }
    return newArray
}

array = [1,4,6,1,3,5,5,17,6,14,17]
console.log (removerDuplicados(array))
