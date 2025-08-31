let a = prompt("Ingresa el primer número:");
let b = prompt("Ingresa el segundo número:");
let c = prompt("Ingresa el tercer número:");

if (a >= b && a >= c) {
  alert("El mayor es " + a);
} else if (b >= a && b >= c) {
  alert("El mayor es " + b);
} else {
  alert("El mayor es " + c);
}
