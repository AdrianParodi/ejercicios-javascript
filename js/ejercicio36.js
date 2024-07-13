// 36) Necesitamos crear un contador . Para esto necesitaremos
// un span que muestre un número (que comience en 0);
// 6 botones con los siguientes valores: : -1, +1, -5, +5, -10, +10;
// al clickear un botón se tiene que actualizar el valor del span sumando o restando la cantidad correspondiente.

// let cabeza = document.getElementById("cabeza")

let contador = 0 
let displayContador= document.querySelector("#contador")
let buttonMenos10 = document.getElementById("menos10")
let buttonMenos5 = document.querySelector('#menos5')
let buttonMas1 = document.getElementById("mas1")
let buttonMas5 = document.getElementById("mas5")
let buttonMas10 = document.getElementById("mas10")



function actualizarContador(cambio){contador += cambio
    displayContador.textContent = contador
}


buttonMenos10.addEventListener('click', ()=> actualizarContador(-10))
buttonMenos5.addEventListener('click', ()=>actualizarContador(-5))
buttonMas1.addEventListener('click', ()=>actualizarContador(1))
buttonMas5.addEventListener('click', ()=>actualizarContador(5))
buttonMas10.addEventListener('click', ()=>actualizarContador(10))