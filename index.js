

function add(n1 ,n2){
    console.log(n1+n2);
}

function subtract(n1 ,n2){
    console.log(n1-n2);
}

function multiply(n1 ,n2){
    console.log(n1*n2);
}

function divide(n1 ,n2){
    console.log(n1/n2);
}

function operate(op , num1, num2){
    if(op === '+'){
        add(num1, num2);
    }else if(op === '-'){
        subtract(num1, num2);
    }else if(op === '*'){
        multiply(num1, num2);
    }else if(op === '/'){
        divide(num1, num2);
    }
}
