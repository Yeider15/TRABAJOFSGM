document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("loginCorreo").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (correo === "" || !/^[\w.%+-]+@duoc\.cl$/.test(correo)) {
    document.getElementById("errorLoginCorreo").innerText = "Correo inválido (solo @duoc.cl)";
    return;
  } else {
    document.getElementById("errorLoginCorreo").innerText = "";
  }

  if (password.length < 8) {
    document.getElementById("errorLoginPassword").innerText = "La contraseña es demasiado corta.";
    return;
  } else {
    document.getElementById("errorLoginPassword").innerText = "";
  }

  // Aquí podrías validar contra base de datos o almacenamiento local
  alert("Login exitoso ✅");
});
