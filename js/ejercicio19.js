// 19)Definí una función esPuenteSeguro que tome por parámetro un string que represente a un puente que consista en caracteres numerales y espacios y nos indique si el puente está entero y es seguro atravesar

 //esPuenteSeguro('### ##')
 //false

// Funcion Flecha
esPuenteSeguro = (cadena)=>{
    let puente = cadena.split(" ")    
    if (puente.length == 1){
        return true
    }
    else{
        return false
    }
    
}

console.log(esPuenteSeguro("######"))


