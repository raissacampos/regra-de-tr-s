function calcular() {
    var valor1 = parseFloat(document.getElementById("a").value)
    var ratio = parseFloat(document.getElementById("b").value)
    var valor3 = parseFloat(document.getElementById("c").value)

    
    var resultado = (valor3 * ratio) / valor1;

    document.querySelector('p').innerHTML = `O resultado é ${resultado}`
}