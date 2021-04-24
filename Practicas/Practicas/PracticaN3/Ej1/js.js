function suma(numero1,numero2)
{
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value)
    var res1 = num1 + num2;

    

        if(res1 % 2 == 0) {
          document.getElementById('resultado').value = "par";
          
        }
        else {
          document.getElementById('resultado').value = "impar";
        }
}