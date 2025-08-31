let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let operacion = prompt("Elige: suma, resta, multiplicacion, division");

if (operacion === "suma") {
  alert("Resultado: " + (num1 + num2));
} else if (operacion === "resta") {
  alert("Resultado: " + (num1 - num2));
} else if (operacion === "multiplicacion") {
  alert("Resultado: " + (num1 * num2));
} else if (operacion === "division") {
  alert("Resultado: " + (num1 / num2));
} else {
  alert("Operación inválida");
}
