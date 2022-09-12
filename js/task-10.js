function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('input');
const buttonCreationRef = document.querySelector('[data-create]');
const buttonRemovalRef = document.querySelector('[data-destroy]');
const divRef = document.querySelector('#boxes');
//console.log(divRef)

buttonCreationRef.addEventListener('click',createBoxes)
buttonRemovalRef.addEventListener('click',removeBoxes)

function createBoxes(amount) {
  for (amount = 1; amount <= 100; amount += 1) {
    const boxRef = document.createElement('div');
    inputRef.textContent = boxRef.amount; 
    boxRef.style.backgroundColor = getRandomHexColor();
    divRef.append(boxRef);
    // box.style.width=
    // box.style.height=
 }
  
  console.log(boxRef)

}
function removeBoxes(amount) {
   amount.currentTarget.reset();
}
// elem.remove();
// добавляем див в основной див в конце функции слздания
//