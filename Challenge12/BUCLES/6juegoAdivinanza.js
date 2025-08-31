let secreto = Math.floor(Math.random() * 10) + 1;
let intento = Number(prompt("Adivina un número del 1 al 10:"));

if (intento === secreto) {
  alert("¡Acertaste! 🎉");
} else if (intento > secreto) {
  alert("Demasiado alto ⬆️");
} else {
  alert("Demasiado bajo ⬇️");
}
