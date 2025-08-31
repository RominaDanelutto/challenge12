let monto = prompt("Ingresa el monto de tu compra:");

if (monto > 100) {
  let descuento = monto * 0.1;
  let total = monto - descuento;
  alert("Tienes un 10% de descuento. Total: $" + total);
} else {
  alert("Total a pagar: $" + monto);
}
