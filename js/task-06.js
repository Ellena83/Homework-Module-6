const inputRef = document.querySelector('input');

const inputLengthRef = inputRef.getAttribute('data-length');
const lengthNum = Number(inputLengthRef);

inputRef.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    
    if (event.currentTarget.value.length === lengthNum) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
          inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }  
}