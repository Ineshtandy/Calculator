//THIS DOM STRUCTURE IS NOT WORKING, FUNCTIONALITY ADDED VIA ONCLICK
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

let dispEl = document.getElementById("display");
clearDisplay();

let arr = [];
let multidig = true;
function store(val){
    //val here is the value sent by the onclick on in the button, integer type
    
    // if(arr[arr.length-1]==undefined){
    //     arr[0]=val;
    // }
    // else if (val==='+' || val==='-' || val==='*' || val==='/'){
    //     arr.push(val);
    // }
    // else if((typeof parseInt(arr[arr.length-1]) == typeof 1) && !(val==='+' || val==='-' || val==='*' || val==='/')){
    //     arr[arr.length-1] += val;
    // }else{
    //     arr.push(val);
    // }
    // console.log(arr);

    //new code multiplication
    
    if(arr[arr.length-1]==undefined){
        arr.push(val);
    }
    else if(parseInt(val) in [1,2,3,4,5,6,7,8,9]){
        if(multidig == true){
            let helper = parseInt(arr[arr.length-1])*10 + parseInt(val);
            arr[arr.length-1] = helper;
    //        console.log(multidig);
        }else{
            arr.push(val);
            multidig = true;
    //        console.log(multidig);
        } 
    }else{
        arr.push(val);
        multidig = false;
    //    console.log(multidig);
    }
    //console.log(arr);


    if(val === '='){
        arr.pop();//this is to remove the '=' sign to make sure array only contains opearands and operators
        
        let ans = 0;
        let n1 = parseInt(arr.shift());//parse to convert string val into int
        let operator = arr.shift();
        let n2 = parseInt(arr.shift());
        ans = operate(n1,operator,n2);
        console.log(ans);

        while(arr.length > 0 && ans != undefined){
            n1 = ans;
            operator = arr.shift();
            n2 = parseInt(arr.shift());//this is the spot where the last element of the array is removed and array becomes empty
            //console.log(operate(n1,operator,n2));
            ans = operate(n1,operator,n2);
        }
        console.log(ans);
        display(ans);
        //arr = [];
    }

    displayStream(val);
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
    dispEl.textContent = ans;
}

function clearDisplay(){
    console.log("inside clear func");
    dispEl.textContent = "ready for calculations";
}

function displayStream(val){
    if(dispEl.textContent === 'ready for calculations'){
        dispEl.textContent = "";
    }
    if(val === '='){
        dispEl.textContent += " ";
    }else{
        dispEl.textContent += " " + val;
    }
}

