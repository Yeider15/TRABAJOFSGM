   document.getElementById("registro").addEventListener("submit", function(e) {
    e.preventDefault();

  let valido = true;
  console.log("Span encontrado:", document.getElementById("errorNombre"));

  // Validación nombre
  var nombre = document.getElementById("nombre").value.trim();
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById("errorNombre").innerText = "Ingrese un nombre válido ";
    valido = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  // Validación correo
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@duoc\.cl$/.test(correo)) {
    document.getElementById("errorCorreo").innerText = "Ingrese un correo válido con dominio @duoc.cl.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // Validación contraseña
  const password = document.getElementById("password").value;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
  if (!regexPass.test(password)) {
    document.getElementById("errorPassword").innerText = "La contraseña debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo.";
    valido = false;
  } else {
    document.getElementById("errorPassword").innerText = "";
  }

  // Confirmación de contraseña
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("errorConfirmPassword").innerText = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("errorConfirmPassword").innerText = "";
  }

  // Teléfono opcional
  const telefono = document.getElementById("telefono").value;
  if (telefono !== "" && !/^\d{9}$/.test(telefono)) {
    document.getElementById("errorTelefono").innerText = "Ingrese un teléfono válido de 9 dígitos.";
    valido = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }

  // Validación mascotas
  const mascotas = document.querySelectorAll(".mascota");
  for (let mascota of mascotas) {
    const tipo = mascota.querySelector(".tipoMascota").value;
    const nombreMascota = mascota.querySelector(".nombreMascota").value.trim();

    if (tipo === "" || nombreMascota === "") {
      alert("Complete todos los datos de las mascotas.");
      valido = false;
      break;
    }
  }

  if (valido) {
    // alert("Registro exitoso ✅");
    const formulario = document.getElementById("registro");
    const formData = new FormData(formulario);
    const urlParam = new URLSearchParams(formData)
    const queryString = urlParam.toString();
    
    alert(queryString)
    this.reset();
  }
});

let contadorMascotas = 0; //Contador para ID únicos
// Agregar mascota
document.getElementById("agregarMascota").addEventListener("click", function() {
  const container = document.getElementById("mascotasContainer");
  const div = document.createElement("div");
  div.classList.add("mascota");

  // crear ID usando contador
  const idTipo = "tipoMascota" + contadorMascotas;
  const idNombre = "nombreMascota" + contadorMascotas;
  
  div.innerHTML = `
    <label for="${idTipo}">Tipo:</label>
    <select id="${idTipo}" class="tipoMascota" name="${idTipo}" required>
      <option value="">Seleccione</option>
      <option value="Gato">Gato</option>
      <option value="Perro">Perro</option>
      <option value="Ave">Ave</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="${idNombre}">Nombre:</label>
    <input type="text" id="${idNombre}" name="${idNombre}" class="nombreMascota" maxlength="50" required>
  `;
  container.appendChild(div);

  contadorMascotas++;
});
