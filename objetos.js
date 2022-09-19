// Crear objeto que contenga datos personales

const datosPersonales = {nombre: "Guido", apellido: "Pérez Orué", edad: 32, altura: 1.73, eresDesarrollador: true}

// Crear variable que obtenga edad a partir de objeto anterior.

let edad = datosPersonales.edad

console.log(edad)

// Crear lista con el objeto datosPersonales y un nuevo objeto con los datos de dos amigos.

const datosAmigo1 = {nombre: "Pedro", apellido: "Gómez", edad: 35, altura: 1.65, eresDesarrollador: false}
const datosAmigo2 = {nombre: "Carla", apellido: "Castro", edad: 27, altura: 1.77, eresDesarrollador: true}
let listaPersonas = [datosPersonales, datosAmigo1, datosAmigo2]

console.log(listaPersonas)

// Crear nueva lista con los objetos de la lista anterior ordenados por edad de mayor a menor.

const listaOrdEdad = listaPersonas.sort((a, b)=>b.edad - a.edad)

console.log(listaOrdEdad)