
const clearBtn=document.querySelector('.clear');
const light=document.querySelector('.light')
const input=document.getElementById('input');
const output=document.getElementById('output');
const numberBtns=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
const ans=document.querySelector("#ans");
const pos=document.querySelector('#pos');
let cursor=document.getElementById('cursor');
let Ans=0;
let operator=''
//--------functions------------

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function factorial(a){
    let fac=1;
    for(let i=a; i>0; i--){
      fac*=i;
    }
    return fac;
}
function operate(){
    let a='';
    let b='';
    let result='';
    let digits=document.querySelectorAll('.digit')
    digits.forEach(d=>{
        result+=d.textContent;
    });
    [a,b]=result.split(`${operator}`);
    a=Number(a);
    b=Number(b);
    if (operator=='+'){
        return add(a,b);
        
    }
    if (operator=='-'){
        return subtract(a,b);
    }
    if (operator=='/'){
        return division(a,b);
    }
    if (operator=='X'){
        return multiply(a,b);
    }
}
//--------EVENTS---------------
numberBtns.forEach(e=>e.addEventListener('click',()=>{
    output.style.display='none';
    let digits=document.getElementsByClassName('digit');
    if (digits[25]) return;

    let digit=document.createElement('div');
    digit.classList.add('digit');
    digit.innerHTML=`${e.id}`;
    input.insertBefore(digit,cursor);
}
))


clearBtn.addEventListener('click',()=>{
    let digits=document.getElementsByClassName('digit');
    while(digits[0]){
        digits[0].parentNode.removeChild(digits[0]);
    }
    output.innerHTML='';
    output.style.display='none';
});

operators.forEach(e=>e.addEventListener('click',()=>{
    let digit=document.createElement('div');
    digit.classList.add('digit');
    digit.innerHTML=`${e.id}`;
    input.insertBefore(digit,cursor);
    operator=`${e.id}`;
 
}
)
)
equal.addEventListener('click',()=>{
    output.style.display='flex';
    let digits=document.getElementsByClassName('digit');
    // to clear input display
    output.innerHTML=operate();
    Ans=operate();
    while(digits[0]){
        digits[0].parentNode.removeChild(digits[0]);
    }
})







