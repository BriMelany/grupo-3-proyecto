let edad = parseFloat(prompt("Ingresa tu edad"));
let ingreso_mensual = parseFloat(prompt("Indica tus ingresos mensuales"));
let admitido;

if (edad < 18) {
    admitido = "no está elegido para el subsidio";
} else if (ingreso_mensual >= 500 && ingreso_mensual <= 2000) {
    admitido = "está admitido para el subsidio";
} else {
    admitido = "no está admitido para el subsidio";
}

alert(`Usted ${admitido}.`);