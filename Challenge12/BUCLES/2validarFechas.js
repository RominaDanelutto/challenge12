let dia = Number(prompt("Ingresa el día:"));
let mes = Number(prompt("Ingresa el mes (1-12):"));
let anio = Number(prompt("Ingresa el año:"));

if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
  alert("Fecha inválida ❌");
} else if (mes === 2 && dia > 29) {
  alert("Febrero no puede tener más de 29 días ❌");
} else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
  alert("Ese mes no puede tener más de 30 días ❌");
} else {
  alert("La fecha es válida ✅");
}
