function suma(numero1,numero2)
{
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    
    var valor = Math.pow(num1,num2);
    document.getElementById('resultado').value = valor;
}