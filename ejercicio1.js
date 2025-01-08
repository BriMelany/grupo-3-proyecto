let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
let imc = peso / (altura * altura);
let categoria;

if (imc < 18.5) {
    categoria = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}
alert(`Tu IMC es ${imc.toFixed(2)}. Categoría: ${categoria}`);