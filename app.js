
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



