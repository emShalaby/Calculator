
const clearBtn=document.querySelector('.clear');
const light=document.querySelector('.light')
const input=document.getElementById('input');
const output=document.getElementById('output');
const numberBtns=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
const ans=document.getElementById('#ans');
let cursor=document.getElementById('cursor');
let numberArr=[];
let currentOp='';
let state='off';
//--------functions------------




//--------EVENTS---------------
numberBtns.forEach(e=>e.addEventListener('click',()=>{
    output.style.display='none';
    let digits=document.getElementsByClassName('digit');
    if (digits[25]) return;

    let digit=document.createElement('div');
    digit.classList.add('digit');
    digit.innerHTML=`${e.id}`;
    input.insertBefore(digit,cursor);
    numberArr.push(`${e.id}`);
}
))


clearBtn.addEventListener('click',()=>{
    let digits=document.getElementsByClassName('digit');
    while(digits[0]){
        digits[0].parentNode.removeChild(digits[0]);
    }
    numberArr=[];
 
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
    numberArr=[];
})





