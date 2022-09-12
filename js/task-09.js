
const bodyRef = document.body;

const buttonRef = document.querySelector('.change-color');

const spanRef = document.querySelector('.color');


buttonRef.addEventListener('click', handleOnClick)

function handleOnClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor()
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}