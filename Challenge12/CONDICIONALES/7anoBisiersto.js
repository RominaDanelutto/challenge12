let anio = prompt("Ingresa un año:");

if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
  alert("Es bisiesto ✅");
} else {
  alert("No es bisiesto ❌");
}
