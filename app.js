
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

function add(a,b) {
    return a+b;
  }
  
 function subtract(a,b) {
    return a-b;
 }
  
function multiply(a,b) {

    return a*b;
  }

function divide(a,b){
    return a/b;
}
function factorial(a){
    let fac=1;
    for(let i=a; i>0; i--){
      fac*=i;
    }
    return fac;
}

const OPS_FNS={
    "+":add,
    "-":subtract,
    "X":multiply,
    "/":divide,

};

function operate(){
    // to extract the operator
    // to get numbers only
    let numberArr=digitArr.join('').split(`${operator}`)
    return OPS_FNS[operator](parseFloat(numberArr[0]),parseFloat(numberArr[1]));
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
    console.log(digitArr,'before using an operator')
    if (digitArr[0]&&digitArr[digitArr.length-1]!=operator&& !digitArr[digitArr.indexOf(operator)]){
        if (e.id=='!' &&operator==''){
            digitArr=digitArr.join('');
            Ans=factorial(digitArr);
            digits.textContent='';
            digitArr=[];
            output.textContent=Ans;
            output.style.display='flex';
            return;

        }
        digits.textContent+=e.id;
        prevInput.textContent=digits.textContent;
        digits.textContent='';
        operator=`${e.id}`;
        digitArr.push(operator);
        
    }
    console.log(digitArr,'after using operator');

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
        digits.textContent='';
        

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
    if(digits.textContent!=''|prevInput.textContent!=''){
    digits.textContent=digits.textContent.slice(0,-1);
    if (digitArr.length>0){
    digitArr[digitArr.length-1]=digitArr[digitArr.length-1].slice(0,-1);
    }
    else {
        digitArr.pop();
    }
    if(digits.textContent==''){
        
        digits.textContent=prevInput.textContent
        digits.textContent=digits.textContent.slice(0,-1);
        prevInput.textContent='';
    }
    digitArr=digitArr.filter((str)=>str!='');
  

}
})

decimal.addEventListener('click',()=>{
    if (digitArr.at(-1)!="."){
    digitArr.push('.');
    digits.textContent+='.';
    }
})
