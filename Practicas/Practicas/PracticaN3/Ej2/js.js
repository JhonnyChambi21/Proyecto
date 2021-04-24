function suma(numero1)
{
    var num1 = parseFloat(document.getElementById('numero1').value);
    
     
    var j=2;

    for(var i=2;i<num1;i++) {      
        for(;j<num1;j++) {        
            if(j%i==0 && (i==j || i==1)) {          
                document.getElementById('resultado').value = j;    
            }         
        }            
    }
    
    
}
