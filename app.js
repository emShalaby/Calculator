const startBtn=document.querySelector('.start');
const closeBtn=document.querySelector('.close');
const clearBtn=document.querySelector('.clear');
const light=document.querySelector('.light')
const input=document.querySelector('.input');
const numberBtns=document.querySelectorAll('.number');
let numberArr=[];
let state='off';

//--------functions------------




//--------EVENTS---------------

startBtn.addEventListener('click',()=>{
    input.style.display='flex';
    light.style.backgroundColor='yellow';
    input.innerHTML='';
    numberArr=[];
}
)

clearBtn.addEventListener('click',()=>{
    input.innerHTML='';
    numberArr=[];
 
});

closeBtn.addEventListener('click',()=>{
    light.style.backgroundColor='white';
    input.innerHTML='';
    numberArr=[];
    input.style='none'
}
)
