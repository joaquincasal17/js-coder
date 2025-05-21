const form = document.getElementById('formTurno');
const listaTurnos = document.getElementById('listaTurnos');
const menuIcon = document.getElementById('menuIcon');
const dropdownTurnos = document.getElementById('dropdownTurnos');

let turnos = JSON.parse(localStorage.getItem('turnos')) || [];

function mostrarTurnos() {
  // Mostrar en el cuerpo
/*   listaTurnos.innerHTML = "<h2>Turnos Agendados</h2>"; */
  if (turnos.length === 0) {
/*     listaTurnos.innerHTML += "<p>No hay turnos agendados.</p>"; */
    dropdownTurnos.innerHTML = "<li>No hay turnos</li>";
    return;
  }

  // Mostrar en el dropdown
  dropdownTurnos.innerHTML = ""; // limpiar
  turnos.forEach((turno, index) => {
    
    
    // Mostrar en el body
/*     listaTurnos.innerHTML += `
      <div class="turno">
        <strong>${turno.nombre}</strong> - ${turno.fecha} ${turno.hora} (${turno.servicio})
        
      </div>
    `; */

    // Mostrar en el menú desplegable
    const li = document.createElement('li');
    li.innerHTML =  `
    <p>mi turno: <p/>
    <strong>Nombre:</strong> ${turno.nombre}<br>
    <strong>Fecha:</strong> ${turno.fecha}<br>
    <strong>Hora:</strong> ${turno.hora}<br><br>
    <button onclick="eliminarTurno(${index})">Cancelar turno</button>
    `;
    dropdownTurnos.appendChild(li);
  });
}

function guardarTurnos() {
  localStorage.setItem('turnos', JSON.stringify(turnos));
}

function eliminarTurno(index) {
  if (confirm("¿Estás seguro de cancelar este turno?")) {
    turnos.splice(index, 1);
    guardarTurnos();
    mostrarTurnos();
  }
}

// Mostrar/ocultar el dropdown al hacer clic en el ícono
menuIcon.addEventListener('click', () => {
  dropdownTurnos.classList.toggle('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nuevoTurno = {
    nombre: document.getElementById('nombre').value,
    fecha: document.getElementById('fecha').value,
    hora: document.getElementById('hora').value,
    servicio: document.getElementById('servicio').value
  };
  turnos.push(nuevoTurno);
  guardarTurnos();
  mostrarTurnos();
  form.reset();
});

mostrarTurnos();