function factorial(numero1)
{
    var num1 = parseFloat(document.getElementById('numero1').value);
    var total = 1;
    for (i=1; i<=num1; i++) {
		total = total * i; 
	}
    document.getElementById('resultado').value = total;
}
