
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
let digitArr=[];
let Ans=0;
let operator=''
//--------functions------------

function factorial(a){
    let fac=1;
    for(let i=a; i>0; i--){
      fac*=i;
    }
    return fac;
}

function operate(){
    // to extract the operator
    let x=digitArr.splice(digitArr.indexOf(`${operator}`),1);
    // to get numbers only
    let numberArr=digitArr.filter(e=>e!=x);
    try{
    if (operator=='+'){
            
        return numberArr.reduce((a,b)=>parseFloat(a)+parseFloat(b));
        
        }
    if (operator=='-'){
        return numberArr.reduce((a,b)=>parseFloat(a)-parseFloat(b));
        }
    if (operator=='/'){
        return numberArr.reduce((a,b)=>parseFloat(a)/parseFloat(b));
        }
    if (operator=='X'){
        return numberArr.reduce((a,b)=>parseFloat(a)*parseFloat(b));
        }
    
    if (operator=='^'){
        return numberArr.reduce((a,b)=>parseFloat(a)**parseFloat(b));
    }
}
catch(error){
    return 0;
}
}
//--------EVENTS---------------

numberBtns.forEach(e=>e.addEventListener('click',()=>{
    //so that you cant add numbers when Ans is on screen
    if (digits.textContent!='Ans'){
    //max input length
    if (digitArr.length<14){
    digits.style.display='flex';
    output.style.display='none';
    output.textContent='';
    digits.textContent+=`${e.id}`;
    digitArr.push(`${e.id}`);
    }
}
}))

operators.forEach(e=>e.addEventListener('click',()=>{
    //factorial is just built different
    if (e.id=='!' &&!digitArr[1]){
        digitArr=digitArr.join('');
        Ans=factorial(digitArr[0]);
        digits.textContent='';
        digitArr=[];
        output.textContent=Ans;
        output.style.display='flex';

    }
    else if (operator!=(''|'!')){
        operator=`${e.id}`;
        digitArr[1]=e.id;
        
    }
    else if (operator==''){
    digits.textContent='';
    operator=`${e.id}`;
    digitArr=[digitArr.join('')];
    digitArr.push(operator);
    }
    if (digitArr[0]==''){
        digitArr=[];
    }
    if(digitArr[0]&&digitArr[1]){
    prevInput.textContent=digitArr[0]+digitArr[1];
    }
}))

equal.addEventListener('click',()=>{

    
    prevInput.textContent='';
    if (operator!=''){
    
    let digitArr2=digitArr.slice(2).join('');
    digitArr[2]=digitArr2;
    
    while (digitArr[3]){
        digitArr.pop();
    }
    Ans=operate();
        if(digitArr[0]!=operator &&digitArr[1]!='' &&digitArr[2]!=''){
        digits.textContent=''
        output.style.display='flex';
        output.textContent=Ans;
        operator='';
        digitArr=[];
        return;
        }
        else{
            Ans=0;
        }
}
    else{
        Ans=digitArr.join('');
        output.style.display='flex';
        output.textContent=Ans;
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
    prevInput.textContent='';
})
answerBtn.addEventListener('click',()=>{
    if (digits.textContent!='Ans'){
    digits.textContent='Ans';
        if (digitArr[1]==operator){
            digitArr[2]=Ans;
            while(digitArr[3]){
                digitArr.pop();
            }
        }
        else {
            digitArr[0]=Ans;
            while(digitArr[1]){
                digitArr.pop();
            }
        }
    output.textContent='';
    output.style.display='none';
    }
    if (isNaN(Ans)){
        ans=0;
        digitArr=[]
        digits.textContent='';
        output.textContent='';
    }

})
delBtn.addEventListener('click',()=>{
    digitArr.pop();
    if (digits.textContent=='Ans'){
        digits.textContent='';
    }
    else{
    digits.textContent=digits.textContent.slice(0,-1);
    }
})

decimal.addEventListener('click',()=>{
    if (digitArr.at(-1)!="."){
    digitArr.push('.');
    digits.textContent+='.';
    }
})
