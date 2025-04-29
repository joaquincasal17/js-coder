
const turnosNoDisponibles = [
    {dia: "lunes", hora: "12"},
    {dia: "miercoles", hora: "14"},
];

function datos (){
    nombre = prompt("ingrese nombre y apellido: ");
    dia = prompt("ingrese el dia: ").toLowerCase();
    hora = prompt("ingrese la hora: ");

    return {nombre, dia, hora};
}
// Función para verificar si el turno está disponible
function estaDisponible(dia, hora) {
    return !turnosTomados.some(turno => turno.dia === dia && turno.hora === hora);
  }
  
  // Función principal para gestionar el turno
  function gestionarTurno() {
    const { nombre, dia, hora } = pedirDatos();
  
    if (estaDisponible(dia, hora)) {
      alert(`¡Turno confirmado para ${nombre} el ${dia} a las ${hora}hs!`);
      console.log(`Turno asignado a ${nombre} - Día: ${dia}, Hora: ${hora}`);
      turnosTomados.push({ dia, hora }); // Guarda el turno
    } else {
      alert("Ese turno ya está ocupado. Por favor elija otro.");
      console.log("Turno no disponible:", dia, hora);
      const deseaIntentar = confirm("¿Querés intentar con otro turno?");
      if (deseaIntentar) {
        gestionarTurno(); // Reintenta
      } else {
        alert("Gracias por utilizar el simulador.");
      }
    }
  }
  
  // Inicia el simulador
  gestionarTurno();