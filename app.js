
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
let inputArr=[];
let currentOp='';
let state='off';
let Ans=0;
//--------functions------------
function operationsCheck(str){
    let numbers=str.match('\\+|\d/g');
    return numbers;
}
function add(a,b){
    return a+b;
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
    inputArr.push(String(`${e.id}`));
}
))


clearBtn.addEventListener('click',()=>{
    let digits=document.getElementsByClassName('digit');
    while(digits[0]){
        digits[0].parentNode.removeChild(digits[0]);
    }
    inputArr=[];
 
});

operators.forEach(e=>e.addEventListener('click',()=>{
    let digit=document.createElement('div');
    digit.classList.add('digit');
    digit.innerHTML=`${e.id}`;
    input.insertBefore(digit,cursor);
    currentOp=e;
}
)
)
equal.addEventListener('click',()=>{
    output.style.display='flex';
    let digits=document.getElementsByClassName('digit');
    while(digits[0]){
        digits[0].parentNode.removeChild(digits[0]);
    }
    
    
    inputArr=[];
    Ans=Number(output.innerHTML);
})






