// 40)Queremos obtener el nombre, año de lanzamiento y banda de un disco , para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]". 

frase = document.querySelector("#frase")
let string = ""

let disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};



// Funcion flecha
let generarString = ()=> {
    string = `El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`


    frase.textContent = string
    return string
}

generarString()
// console.log(generarString())
