let ingreso = Number(prompt("Ingresa tu ingreso mensual:"));

if (ingreso < 1000) {
  alert("Impuesto: 0%");
} else if (ingreso <= 5000) {
  alert("Impuesto: 10%");
} else {
  alert("Impuesto: 20%");
}
