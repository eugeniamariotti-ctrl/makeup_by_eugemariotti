let nombre = "María Eugenia";
let apellido = "Mariotti";
let edad = 27;
let tengoMascota = false;

console.log("Nombre = ", nombre);
console.log("Apellido = ", apellido);
console.log("Edad = ", edad);
console.log("Tengo mascota = ", tengoMascota);

let infoPersonal = {
    nombre: "María Eugenia",
    apellido: "Mariotti",
    edad: 27,
    tengoMascota: false,
    comidaFav: ["Hamburguesas", "Lasagna", "Asado"],

};

console.log(infoPersonal);
console.log(infoPersonal.comidaFav[0]);

let titulo = document.querySelector("h1")
console.log("Titulo: ", titulo.innerText)

function mostrarLargoNombre(numDeLetras) {
    return numDeLetras.length;
}

let largoNombre = mostrarLargoNombre("María Eugenia")
console.log("El nombre tiene " + largoNombre + " letras")





