startBtn=document.querySelector('.start');
closeBtn=document.querySelector('.close');
light=document.querySelector('.light')
input=document.querySelector('.input');
numberBtns=document.querySelectorAll('.number');
numberArr=[];

//--------EVENTS---------------
startBtn.addEventListener('click',()=>{
    input.style.display=('flex');
    light.style.backgroundColor='yellow';
})

closeBtn.addEventListener('click',()=>{
    
    input.style.display='none';
    input.innerHTML='';
    light.style.backgroundColor='white';
})

numberBtns.forEach(element => {
    element.addEventListener('click',()=>{
        input.innerHTML+=element.id;
        numberArr.push(element.id);
    }
    )
});
