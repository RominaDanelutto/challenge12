let usuarioGuardado = "admin";
let claveGuardada = "1234";

let usuarioIngresado = prompt("Usuario:");
let claveIngresada = prompt("Contraseña:");

if (usuarioIngresado === usuarioGuardado && claveIngresada === claveGuardada) {
  alert("Acceso permitido ✅");
} else {
  alert("Acceso denegado ❌");
}
