
const clearBtn=document.querySelector('.clear');
const input=document.getElementById('input');
const output=document.getElementById('output');
const numberBtns=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
const ans=document.querySelector("#ans");
const digits=document.querySelector('.digit');
const answerBtn=document.querySelector('#answer');
const delBtn=document.querySelector('.del');
const decimal=document.querySelector('.decimal');
const prevInput=document.querySelector('#prev-input');

//--------functions------------

function add(a,b) {
    return a+b;
  }
  
 function subtract(a,b) {
    return a-b;
 }
  
function multiply(a,b) {

    return a*b;
  }

function divide(a,b){
    return a/b;
}
function factorial(a){
    let fac=1;
    for(let i=a; i>0; i--){
      fac*=i;
    }
    return fac;
}

const OPS_FNS={
    "+":add,
    "-":subtract,
    "X":multiply,
    "/":divide,

};

function operate(op,num1,num2){

    return OPS_FNS[op](parseFloat(num1),parseFloat(num2));
}
//--------EVENTS---------------

numberBtns.forEach(e=>e.addEventListener('click',()=>{
    digits.textContent+=e.id;
}))

operators.forEach(e=>e.addEventListener('click',()=>{
    digits.textContent+=e.id;
}))
delBtn.addEventListener('click',()=>{
    digits.textContent=digits.textContent.slice(0,-1);
})