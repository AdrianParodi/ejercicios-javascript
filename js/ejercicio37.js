// 37) Vamos a crear una página para jugar a resolver una pregunta . Se espera que la misma:
// tenga dos span el primero con una pregunta, o adivinanza, el segundo inicialmente estará vacío;
// tenga tres botones con posibles respuestas;
// al clickear la respuesta correcta, el botón debe ponerse de color verde, y el texto del segundo span debe actualizarse mostrando ¡Respuesta correcta!;
// si se clickea una respuesta incorrecta, se debe mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo, y el texto del segundo span debe actualizarse mostrando ¡Respuesta equivocada!.

// let mensajeRespuesta = document.querySelector("#mensajeRespuesta")
let MensajeRespuesta = document.querySelector("#mensajeRespuesta")
// let MensajeRespuesta = document.querySelector("#mesajeRespuesta")
let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")

function respuestaCorrecta(){
    MensajeRespuesta.textContent="Respuesta Correcta!!"
    boton3.classList.add('boton-verde')
    boton2.classList.remove('boton-rojo')
    boton1.classList.remove('boton-rojo')
}

function respuestaIncorrecta(){
    MensajeRespuesta.textContent="Respuesta Equivocada!!"
    boton1.classList.add('boton-rojo')
    boton2.classList.add('boton-rojo')
    boton3.classList.add('boton-verde')
}


boton1.addEventListener("click", ()=>respuestaIncorrecta())
// boton1.addEventListener("click", mensajeRespuesta.textContent=displayMensajeRespuesta)

boton2.addEventListener("click", ()=>respuestaIncorrecta())
// boton2.addEventListener("click", mensajeRespuesta.textContent=displayMensajeRespuesta)

boton3.addEventListener("click", ()=>respuestaCorrecta())
// boton3.addEventListener("click", mensajeRespuesta.textContent=displayMensajeRespuesta)