// 12)Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.

let esElUltimoCaracter = (palabra, caracter)=>{
    let lastChar = palabra.length - 1
        if(palabra[lastChar] == caracter){
            return true
        }  
        else{
            return false
        }
}
console.log(esElUltimoCaracter("Cocorito", "a"))