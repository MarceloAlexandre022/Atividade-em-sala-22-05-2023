// Funções de cálculo

function calcularAreaCirculo() {
    var raio = parseFloat(document.getElementById('raioInput').value);
    var area = Math.PI * raio * raio;
    document.getElementById('areaCirculoOutput').innerHTML = 'Área: ' + area.toFixed(2);
}

function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById('baseInput').value);
    var altura = parseFloat(document.getElementById('alturaInput').value);
    var area = base * altura;
    document.getElementById('areaRetanguloOutput').innerHTML = 'Área: ' + area.toFixed(2);
}

function calcularAreaTriangulo() {
    var base = parseFloat(document.getElementById('baseTrianguloInput').value);
    var altura = parseFloat(document.getElementById('alturaTrianguloInput').value);
    var area = (base * altura) / 2;
    document.getElementById('areaTrianguloOutput').innerHTML = 'Área: ' + area.toFixed(2);
}

function calcularHipotenusa() {
    var cateto1 = parseFloat(document.getElementById('cateto1Input').value);
    var cateto2 = parseFloat(document.getElementById('cateto2Input').value);
    var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    document.getElementById('hipotenusaOutput').innerHTML = 'Hipotenusa: ' + hipotenusa.toFixed(2);
}

function calcularBaskhara() {
    var a = parseFloat(document.getElementById('aInput').value);
    var b = parseFloat(document.getElementById('bInput').value);
    var c = parseFloat(document.getElementById('cInput').value);
    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('baskharaOutput').innerHTML = 'Não existem raízes reais.';
    } else if (delta === 0) {
        var raiz = -b / (2 * a);
        document.getElementById('baskharaOutput').innerHTML = 'Raiz: ' + raiz.toFixed(2);
    } else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('baskharaOutput').innerHTML = 'Raiz 1: ' + raiz1.toFixed(2) + '<br>' +
            'Raiz 2: ' + raiz2.toFixed(2);
    }
}

function converterMoedas() {
    var valorReais = parseFloat(document.getElementById('reaisInput').value);
    var valorDolares = valorReais / 5.5; // Taxa de conversão fictícia de 5.5
    document.getElementById('moedasOutput').innerHTML = 'Valor em dólares: $' + valorDolares.toFixed(2);
}

function converterTemperatura() {
    var temperaturaCelsius = parseFloat(document.getElementById('celsiusInput').value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    document.getElementById('temperaturaOutput').innerHTML = 'Temperatura em Fahrenheit: ' + temperaturaFahrenheit.toFixed(2) + ' °F';
}

function converterVelocidade() {
    var velocidadeKMH = parseFloat(document.getElementById('kmhInput').value);
    var velocidadeMS = velocidadeKMH / 3.6;
    document.getElementById('velocidadeOutput').innerHTML = 'Velocidade em m/s: ' + velocidadeMS.toFixed(2) + ' m/s';
}

function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1Input').value);
    var nota2 = parseFloat(document.getElementById('nota2Input').value);
    var nota3 = parseFloat(document.getElementById('nota3Input').value);
    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('mediaOutput').innerHTML = 'Média: ' + media.toFixed(2);
}