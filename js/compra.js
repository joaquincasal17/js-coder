const libros = ["Cien Años de Soledad", "1984", "El Principito", "Harry Potter", "Don Quijote"];
const preciosAlquiler = [300, 250, 200, 400, 350];
let alquileres = [];

//Funciones
function mostrarLibros() {
  console.clear();
  console.log("Lista de libros disponibles para alquilar:");
  for (let i = 0; i < libros.length; i++) {
    console.log(`${i + 1}. ${libros[i]} - $${preciosAlquiler[i]} por semana`);
  }
}

function alquilarLibro() {
  let mensaje = "Libros disponibles para alquilar:\n";
  for (let i = 0; i < libros.length; i++) {
    mensaje += `${i + 1}. ${libros[i]} - $${preciosAlquiler[i]} por semana\n`;
  }
  mensaje += "\nIngrese el número del libro que desea alquilar:";

  let eleccion = parseInt(prompt(mensaje));

  if (eleccion >= 1 && eleccion <= libros.length) {
    alquileres.push(preciosAlquiler[eleccion - 1]);
    alert(`Has alquilado: ${libros[eleccion - 1]}`);
    return true;
  } else {
    alert("Opción inválida. Por favor, intente de nuevo.");
    return false;
  }
}

function calcularTotal() {
  let total = alquileres.reduce((acum, precio) => acum + precio, 0);
  return total;
}

function finalizarAlquiler() {
  if (alquileres.length === 0) {
    alert("No has alquilado ningún libro.");
  } else {
    let totalPagar = calcularTotal();
    alert(`El total a pagar por tus alquileres es: $${totalPagar}`);
    console.log(`Total de alquiler: $${totalPagar}`);
  }
}

//Programa principal
alert("Bienvenido al simulador de alquiler de libros.");

// Primer alquiler
let alquilando = true;

while (alquilando) {
  const alquilado = alquilarLibro(); // Intenta alquilar

  if (alquilado) {
    let respuesta = confirm("¿Desea alquilar otro libro?");
    if (!respuesta) {
      alquilando = false;
    }
  }
}

// Finalizar
finalizarAlquiler();
alert("¡Gracias por utilizar nuestro servicio!");
