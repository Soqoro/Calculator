const display = document.getElementById("display");
let num1 = '';
let num2 = '';
let operatorOn = false;
let opval = '';

function add(num1,num2)
{
    return num1+num2;
}

function subtract(num1,num2)
{
    return num1-num2;
}

function multiply(num1,num2)
{
    return num1*num2;
}

function divide(num1,num2)
{
    console.log(`test1:${num2}`);
    if(num2 == 0)
    {
        console.log('did this happen?');
        display.textContent = "Did you just try to divide by 0?";
        console.log('did this happen2?');
        setTimeout(()=>{return num1},100000);
    }
    return num1/num2;
}

function operate(num,num2,operator)
{
    switch(operator)
    {
        case '+':
            num1 = add(num,num2);
            return;
        
        case '-':
            num1 = subtract(num,num2);
            return;
        
        case '*':
            num1 = multiply(num,num2);
            return;

        case '/':
            num1 = divide(num,num2);
            return;
    }
}

function op(e)
{
    let pressedOp = e.target.textContent;
    if(num2 == '')
    {
        if(pressedOp != '=')
        {
            opval = pressedOp;
        }
        if(num1 != '')
        {
            operatorOn = true;
        }
    }
    else
    {
        operate(+num1,+num2,opval);
        display.textContent = num1;
        num2 = '';
        opval = e.target.textContent;
    }
}

const numpad = document.getElementById("numpad");
for(i = 0; i <= 9; i++)
{
    const num = document.createElement('button');
    num.classList = "num";
    num.textContent = i;
    num.addEventListener('click', ()=>{
        if(operatorOn)
        {
            num2 += num.textContent;
            display.textContent = num2;
        }
        else
        {
            num1 += num.textContent;
            display.textContent = num1;
        }
    })
    numpad.appendChild(num);
}

//Linking up event handlers for all operators
const adder = document.getElementById('add');
const minus = document.getElementById('subtract');
const multiplyer = document.getElementById('multiply');
const divider = document.getElementById('divide');
const equal = document.getElementById("=");
const clear = document.getElementById("clear");
adder.addEventListener('click',(e)=>op(e));
minus.addEventListener('click',(e)=>op(e));
multiplyer.addEventListener('click',(e)=>op(e));
divider.addEventListener('click',(e)=>op(e));
equal.addEventListener('click', (e)=>op(e));
clear.addEventListener('click',()=>{
    display.textContent = '';
    num1 = '';
    num2 = '';
    operatorOn = false;
    opval = '';
});