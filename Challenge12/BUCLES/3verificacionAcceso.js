let usuario = prompt("Ingresa tu nombre de usuario:");
let rol = prompt("Ingresa tu rol (admin, editor, invitado):");

if (rol === "admin") {
  alert("Acceso total 🔑");
} else if (rol === "editor") {
  alert("Acceso limitado ✏️");
} else if (rol === "invitado") {
  alert("Acceso solo lectura 👀");
} else {
  alert("Rol no válido ❌");
}
