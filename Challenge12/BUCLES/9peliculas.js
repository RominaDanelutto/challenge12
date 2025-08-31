let edadUser = Number(prompt("Ingresa tu edad:"));
let clasificacion = prompt("Clasificación de la película (+13 o +18):");

if (clasificacion === "+13" && edadUser >= 13) {
  alert("Puedes ver la película 🎬");
} else if (clasificacion === "+18" && edadUser >= 18) {
  alert("Puedes ver la película 🎥");
} else {
  alert("No tienes la edad suficiente ❌");
}
