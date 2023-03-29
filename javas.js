let resultado = document.querySelector("#resultado");
let num1 = '';
let num2 = '' ;
let op1;

function agregarNum(num) {
   
//undefined significa que no tiene valor
    if (op1 == undefined) {               
         num1  +=   num
         resultado.textContent = num1
    } else {
        num2 += num
        resultado.textContent += num
    }
}

function agregarNeg(){    
    if(num1   != '' && op1 == undefined ){
        num1  = num1 * -1
        resultado.textContent = num1         
    } 
    else if(num1 != '' && op1 != undefined &&  num2  != '') {        
        num2  = num2 * -1 
        resultado.textContent = `${num1} ${op1} ${num2}`;
    }   
    
}

function agregarOp(op) { 
    if(op1 == undefined){
        resultado.textContent += op
        op1 = op
        
     } else if( op1 != undefined ){
        resultad();
        resultado.textContent += op
        op1 = op 
        
        if (op1 == '+') {
            num1 = parseFloat(num1) + parseFloat(num2)
        } else if (op1 == '-') {
            num1 = parseFloat(num1) - parseFloat(num2)
        } else if (op1 == '*') {
            num1 = parseFloat(num1) * parseFloat(num2)
        } else if ( op1 == '/'){
           num1 =  parseFloat(num1) / parseFloat(num2)
        }
        num2 = '';
     }      
}

function borrarCE () { 
    resultado.textContent = 0
    num1 = '';
    num2 = '' ;
    op1;
}

function borraUno(){
    if( num2 != ''){
        num2 = num2.substring(0, num2.length - 1)
        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1)
       
    } else if (op1 != undefined) {

       op1 = op1.substring(0, op1.length  -1)
       resultado.textContent =  resultado.textContent.substring(0, resultado.textContent.length  -1)

    } else {

        num1 = num1.substring(0, num1.length - 1)
        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length  -1)
    }
    
}

function resultad() {
    if( op1 == '+'){
        resultado.textContent = parseFloat(num1) + parseFloat(num2) 
        op1 = undefined           
    } else if ( op1 == '-') {
        resultado.textContent =  parseFloat(num1) - parseFloat(num2)
        op1 = undefined
    }  else if (op1 == '/') {
        resultado.textContent =  parseFloat(num1) / parseFloat(num2)
        op1 = undefined
    } else if (op1 == '*') {
        resultado.textContent =  parseFloat(num1) * parseFloat(num2)
        op1 = undefined
    }
}




