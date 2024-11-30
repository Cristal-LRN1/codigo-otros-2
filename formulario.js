//Se cambian los var por let para evitar errores en el código
let formulario = document.querySelector(".formulario") // No existe un id #form, se cambia a .formulario

formulario.onsubmit = function(e) {
  console.log('onSubmit')

  e.preventDefault();// Se corrige la escritura de preventDefault()
  
  let nb = formulario.elements[0] // Se cambia el nombre de la variable para evitar errores
  let edd = formulario.elements[1] // Se cambia el nombre de la variable e para evitar conflictos con la función e.preventDefault()
  let na = formulario.elements[2]

  let nombre = nb.value
  let edad = edd.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)


  if (nombre.length === 0) {
    nom.classList.add("error")
  }
  else if (edad < 18 || edad > 120) { //Corregir a else if
    ed.classList.add("error")
  }
  else if (nombre.length > 0 && (edad > 18 && edad < 120) ) { //Corregir a else if
  agregarInvitado(nombre, edad, nacionalidad)
  console.log('en orden');
  }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
//let corteLinea = document.createElement("br") se comenta por error
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
}
let lista = document.getElementById("lista-de-invitados") //Se crea un div en html para agregar este elemento

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")// Se quita el added, dejando solo add
lista.appendChild(elementoLista)

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)


function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
this.parentNode.style.display = 'none'; //se descomento 
botonBorrar.parentNode.remove()
  
  }
