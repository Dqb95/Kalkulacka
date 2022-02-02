window.onload = function(){
    
    document.querySelector("#submit").onclick = function(e){

        e.preventDefault();

        var result = 0;
        
        var a = document.querySelector("#number1").value;
        var b = document.querySelector("#number2").value;
        var operation = document.querySelector("#operation").value;
       
        a = parseFloat(a);
        b = parseFloat(b);
        
        switch(operation){
            
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "/":
                if(b == 0){
                    result = "you cannot divide by zero";
                } else{
                    result = a / b;
                }
                break;
            case "*":
                result = a * b;
                break;
            default:
                result = "invalid operation";
                break;
            
        }
        
        document.querySelector("#screen").innerText = result;
        
    }
    
    
}
