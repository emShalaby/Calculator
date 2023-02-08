
const clearBtn=document.querySelector('.clear');
const light=document.querySelector('.light')
const input=document.getElementById('input');
const numberBtns=document.querySelectorAll('.number');
const digits=document.querySelector('.digits');
let cursor=document.getElementById('cursor');
let numberArr=[];
let state='off';
console.log(input)
//--------functions------------




//--------EVENTS---------------
numberBtns.forEach(e=>e.addEventListener('click',()=>{
    digits.innerHTML+=`${e.id}`;

}
))




clearBtn.addEventListener('click',()=>{
    digits.innerHTML=''
    numberArr=[];
 
});



