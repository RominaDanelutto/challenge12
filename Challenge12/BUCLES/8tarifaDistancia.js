let km = Number(prompt("Ingresa la distancia en km:"));
let precio;

if (km <= 10) {
  precio = 5;
} else if (km <= 50) {
  precio = 10;
} else {
  precio = 20;
}

alert("El costo de envío es $" + precio);
