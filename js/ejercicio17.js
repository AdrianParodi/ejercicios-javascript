// 17)Definí una función ocultarContrasenia que reciba como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

ocultarContrasenia = (contrasenia)=>{
    let contraseniaString = String(contrasenia)
    console.log(contraseniaString, typeof(contraseniaString))
    let longitud = contraseniaString.length
    let resultado = "*".repeat(longitud)
    return resultado

}

let resultado2 = ocultarContrasenia(12469848788)
console.log(resultado2)