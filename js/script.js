function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    var area = Math.PI * raio * raio;
    document.getElementById("resultado").innerHTML = "A área do círculo é: " + area.toFixed(2);
}

function calcularHipotenusa() {
    var catetoA = parseFloat(document.getElementById("catetoA").value);
    var catetoB = parseFloat(document.getElementById("catetoB").value);

    var hipotenusa = Math.sqrt(catetoA * catetoA + catetoB * catetoB);

    document.getElementById("resultado").innerHTML = "A hipotenusa é: " + hipotenusa.toFixed(2);
}

function converterParaDolar() {
    var valorReal = parseFloat(document.getElementById("valorReal").value);
    var taxaCambio = parseFloat(document.getElementById("taxaCambio").value);

    var valorDolar = valorReal / taxaCambio;

    document.getElementById("resultado").innerHTML = "Valor em dólar: $" + valorDolar.toFixed(2);
}

function converterParaFahrenheit() {
    var temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    document.getElementById("resultado").innerHTML = "Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + " °F";
}

function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").innerHTML = "Média: " + media.toFixed(2);
}

function calcularRaizes() {
    var a = parseFloat(document.getElementById("valorA").value);
    var b = parseFloat(document.getElementById("valorB").value);
    var c = parseFloat(document.getElementById("valorC").value);

    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
    } else if (delta === 0) {
        var raizUnica = -b / (2 * a);
        document.getElementById("resultado").innerHTML = "A equação possui uma raiz única: " + raizUnica.toFixed(2);
    } else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "As raízes da equação são: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2);
    }
} function calcularRaizes() {
    var a = parseFloat(document.getElementById("valorA").value);
    var b = parseFloat(document.getElementById("valorB").value);
    var c = parseFloat(document.getElementById("valorC").value);

    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
    } else if (delta === 0) {
        var raizUnica = -b / (2 * a);
        document.getElementById("resultado").innerHTML = "A equação possui uma raiz única: " + raizUnica.toFixed(2);
    } else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "As raízes da equação são: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2);
    }
}