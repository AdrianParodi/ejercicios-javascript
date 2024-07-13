// 14)Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee

contarPalabras = (frase)=>{
    let palabras = frase.split(" ")
    return palabras.length
}

frase = "Argentina será potencia mundial"
console.log(`La frase "${frase}" contiene ${contarPalabras(frase)} palabras`)