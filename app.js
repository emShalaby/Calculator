
const clearBtn=document.querySelector('.clear');
const light=document.querySelector('.light')
const input=document.getElementById('input');
const output=document.getElementById('output');
const numberBtns=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
const ans=document.querySelector("#ans");
const pos=document.querySelector('#pos');
const digits=document.querySelector('.digit');
const answerBtn=document.querySelector('#answer');
const delBtn=document.querySelector('.del');
let cursor=document.getElementById('cursor');
let digitArr=[];
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
    console.log(digitArr);
    let x=digitArr.splice(digitArr.indexOf(`${operator}`),1);
    let =numberArr=digitArr.filter(e=>e!=x);
    console.log(numberArr);
    if (operator=='+'){
            
        return numberArr.reduce((a,b)=>Number(a)+Number(b));
        
        }
    if (operator=='-'){
        return numberArr.reduce((a,b)=>Number(a)-Number(b));
        }
    if (operator=='/'){
        return numberArr.reduce((a,b)=>Number(a)/Number(b));
        }
    if (operator=='X'){
        return numberArr.reduce((a,b)=>Number(a)*Number(b));
        }
    
    if (operator=='^'){
        return numberArr.reduce((a,b)=>Number(a)**Number(b));
    }
}
//--------EVENTS---------------

numberBtns.forEach(e=>e.addEventListener('click',()=>{
    if (digitArr.length<14){
    digits.style.display='flex';
    output.style.display='none';
    output.textContent='';
    digits.textContent+=`${e.id}`;
    digitArr.push(`${e.id}`);
    }
}))

operators.forEach(e=>e.addEventListener('click',()=>{
    if (e.id=='!'){
        digitArr=[digitArr.join('')];
        Ans=factorial(digitArr[0]);
        digits.innerHTML='';
        digitArr=[];
        output.innerHTML=Ans;
        output.style.display='flex';
        return;

    }
    if (operator!=''){
        operator=`${e.id}`;
        digitArr[1]=e.id;
    }
    if (operator==''){
    digits.textContent='';
    operator=`${e.id}`;
    digitArr=[digitArr.join('')];
    digitArr.push(operator);
    console.log(digitArr);
    }



}))

equal.addEventListener('click',()=>{
    digits.textContent=''
    if (operator!=''){
    
    let digitArr2=digitArr.slice(2).join('');
    digitArr[2]=digitArr2;
    
    while (digitArr[3]){
        digitArr.pop();
    }
    Ans=operate();
    output.style.display='flex';
    output.textContent=Ans;
    operator='';
    digitArr=[];
}
    
})

clearBtn.addEventListener('click',()=>{
    Ans=0;
    output.style.display='none';
    output.textContent='';
    digits.textContent='';
    digitArr=[];
    operator='';
})
answerBtn.addEventListener('click',()=>{
    digits.textContent+='Ans';
    digitArr.push(Ans);
    output.textContent='';
    output.style.display='none';
})
delBtn.addEventListener('click',()=>{
    digitArr.pop();
    digits.textContent=digits.textContent.slice(0,-1);
})



