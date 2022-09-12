const inputRef = document.querySelector('input');
const outputRef = document.getElementById('text');

inputRef.addEventListener('input', handleInputRange);

// variant 1
function handleInputRange() {
   
    outputRef.style.fontSize = `${inputRef.value}px`
}

// variant 2
// function handleInputRange(event) {
   
//     outputRef.style.fontSize = event.currentTarget.value + 'px';
// }