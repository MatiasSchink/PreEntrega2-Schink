/*SIMULADOR INTERACTIVO*/
alert("Bienvenidos/as a mi trabajo de la 2°er pre entrega, para seguir por favor hacer los siguientes pasos:")
let nombre = (prompt("Ingrese tu Nombre"))
alert("Hola Abuelo/a " + nombre)
alert("Esta es la lista de tus hijos/as:\n Juan \n Maria \n Pedro \n Ana \n Ariel \n Fiamma \n Rosa \n Patricia \n Alfredo \n Emilio \n Maximiliano \n Sebastian \n Gonzalo \n Marcelo")

//Array de Objetos
const personas = [
    { nombre: "Juan" },
    { nombre: "Maria" },
    { nombre: "Pedro" },
    { nombre: "Ana" },
    { nombre: "Ariel" },
    { nombre: "Fiamma" },
    { nombre: "Rosa" },
    { nombre: "Patricia" },
    { nombre: "Alfredo" },
    { nombre: "Emilio" },
    { nombre: "Maximiliano" },
    { nombre: "Sebastian" },
    { nombre: "Gonzalo" },
    { nombre: "Marcelo" }
]

let hijoFavorito = ""

//DO...WHILE
do {
    let favorito = prompt("Ingrese el nombre de tu FAVORITO/A:")
    //FIND
    hijoFavorito = personas.find(persona => persona.nombre === favorito)
    //IF
    if (hijoFavorito) {
        alert("Tu FAVORITO/A es " + hijoFavorito.nombre)
        break
    } else {
        alert("Por favor, pone el nombre de un hijo/a reconocido")
    }
} while (true)

alert("Ahora te vas a bancar una lista de los hijos no favoritos, para que te sientas mal y de paso cumplir con una consigna del trabajo:")

//FOREACH
personas.forEach(persona => {
    if (persona !== hijoFavorito) {
        alert(persona.nombre)
    }
})

alert("Colorin Colorado este ¿Cuento? se a acabado.")