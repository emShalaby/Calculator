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



clearBtn.addEventListener('click',()=>{
    input.innerHTML='';
    numberArr=[];
});
