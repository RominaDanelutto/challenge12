let opcion = prompt("Elige unidad: C o F");
let temp = Number(prompt("Ingresa la temperatura:"));
let convertido;

if (opcion === "C") {
  convertido = (temp * 9/5) + 32;
  alert(temp + "°C = " + convertido + "°F");
} else if (opcion === "F") {
  convertido = (temp - 32) * 5/9;
  alert(temp + "°F = " + convertido + "°C");
} else {
  alert("Opción inválida");
}

if (temp < 35) {
  alert("Hipotermia ❄️");
} else if (temp <= 37.5) {
  alert("Temperatura normal 🙂");
} else {
  alert("Fiebre 🤒");
}
