// let oneBtn = document.querySelector("#one");
// oneBtn.addEventListener("click",e => {
//     console.log(e.innerText);
// });
// let twoBtn = document.querySelector("#2");
// let threeBtn = document.querySelector("#3");
// let fourBtn = document.querySelector("#4");
// let fiveBtn = document.querySelector("#5");
// let sixBtn = document.querySelector("#6");
// let sevenBtn = document.querySelector("#7");
// let eightBtn = document.querySelector("#8");
// let nineBtn = document.querySelector("#9");

// let addBtn = document.querySelector("#+");
// let minusBtn = document.querySelector("#-");
// let multiplyBtn = document.querySelector("#*");
// let divideBtn = document.querySelector("#/");
// let equalBtn = document.querySelector("#=");
// let clearBtn = document.querySelector("#clear");

let arr = [];
function store(val){
    //console.log(val);
    arr.push(val);
    //console.log(arr);

    if(val === '='){
        let n1 = parseInt(arr.shift());
        let operator = arr.shift();
        let n2 = parseInt(arr.shift());
        
        let ans = operate(n1,operator,n2);
        display(ans);
    }
    //let counter = 0;
    // let arr[3];
    // if(counter < 3){
    //     arr[counter] = val;
    // }else{
    //     //call function
    // }
}

function add(n1 ,n2){
    return n1+n2;
}

function subtract(n1 ,n2){
    return n1-n2;
}

function multiply(n1 ,n2){
    return n1*n2;
}

function divide(n1 ,n2){
    return n1/n2;
}

function operate(num1 ,op, num2){
    if(op === '+'){
        return add(num1, num2);
    }else if(op === '-'){
        return subtract(num1, num2);
    }else if(op === '*'){
        return multiply(num1, num2);
    }else if(op === '/'){
        return divide(num1, num2);
    }
}

function display(ans){
    let dispEl = document.getElementById("display");
    dispEl.textContent = ans;
}

