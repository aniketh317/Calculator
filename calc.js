operand = 0; //operand
acc = 0; //accumulated result
function num(e)
{
    term = parseInt(this.id);
    operand = (operand*10)+term;
    exp = document.querySelector('.exp');
    exp.textContent = exp.textContent + this.id;
}

num_buttons = document.querySelectorAll(".num");
num_buttons.forEach(element => {
    element.addEventListener('click', num);
});

oper = 'plus';
function operation(e)
{
    exp = document.querySelector('.exp');
    if(oper === 'plus')
        acc = acc+operand;
    else if(oper === 'minus')
        acc = acc-operand; 
    else if(oper === 'mult')
        acc = acc*operand;
    else if(oper === 'divi')
        acc = acc/operand;
    oper = this.id;

    operand = 0;
    if(oper === 'plus')
        exp.textContent = exp.textContent + '+';
    else if(oper === 'minus')
        exp.textContent = exp.textContent + '-';
    else if(oper === 'mult')
        exp.textContent = exp.textContent + '*';
    else if(oper === 'divi')
        exp.textContent = exp.textContent + '/';
}

oper_buttons = document.querySelectorAll(".op");
oper_buttons.forEach(element => {
    element.addEventListener('click', operation);
});

function result(e)
{
    res = document.querySelector('.res');
    if(oper === 'plus')
        acc = acc+operand;
    else if(oper === 'minus')
        acc = acc-operand; 
    else if(oper === 'mult')
        acc = acc*operand;
    else if(oper === 'divi')
        acc = acc/operand;
    res.textContent = `Result = ${acc}`;
    operand = 0;
    oper = 'plus';
}
equ_button = document.querySelector(".equ");
equ_button.addEventListener('click', result);