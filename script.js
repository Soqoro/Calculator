const display = document.getElementById("display");
let num1 = 0;
let num2 = 0;
let test = 0;
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
    return num1/num2;
}

function operate(num,num2,operator)
{
    switch(operator)
    {
        case '+':
            console.log(`t3:${num1}`);
            num1 = add(num,num2);
            console.log(`t4:${num1}`);
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
    opval = e.target.textContent;
    display.textContent = num1;
    console.log(`test1:${num1}`);
    if(test == 1)
    {
        test = 2;
    }
    else
    {
        operate(+num1,+num2,opval);
        test = 0;
    }
    console.log(`t2:${num1}`);
}

const numpad = document.getElementById("numpad");
for(i = 0; i <= 9; i++)
{
    const num = document.createElement('button');
    num.classList = "num";
    num.textContent = i;
    num.addEventListener('click', ()=>{
        if(test == 0)
        {
            num1 = num.textContent;
            display.textContent = num1;
            test = 1;
        }
        else if(test == 1)
        {
            num1 += num.textContent;
            display.textContent = num1;
        }
        else if(test == 2)
        {
            num2 = num.textContent;
            display.textContent = num2;
            test = 3;
        }
        else
        {
            num2 += num.textContent;
            display.textContent = num2;
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
equal.addEventListener('click', ()=>{display.textContent = num1;test=0;});
clear.addEventListener('click',()=>{display.textContent = '0';test=0;});