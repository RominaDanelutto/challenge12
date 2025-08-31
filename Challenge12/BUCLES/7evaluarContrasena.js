let pass = prompt("Ingresa una contraseña:");
let tieneMayus = /[A-Z]/.test(pass);
let tieneNum = /[0-9]/.test(pass);
let tieneSimbolo = /[\W]/.test(pass);

if (pass.length >= 8 && tieneMayus && tieneNum && tieneSimbolo) {
  alert("Contraseña segura ✅");
} else {
  alert("Contraseña insegura ❌");
}
