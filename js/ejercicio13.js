// 13)Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique si tiene 8 caracteres o más.

const esValida = (contrasenia) => {
    if(contrasenia.length >= 8) {return true}
    else {return false}
    // let longitud = contrasenia.length
}

console.log("Resultado de evaluacion de contraseña:")
console.log (esValida("pity"))
console.log (esValida("ContraseñaSuperSegura123456"))