let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');


buttonDecrement.addEventListener('click', clickhandler1);
buttonIncrement.addEventListener('click', clickhandler2);

function clickhandler1() {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
    
}
function clickhandler2() {
    counterValue += 1;
    document.getElementById('value').innerHTML = counterValue;
}