
const formRef = document.querySelector('.login-form')
.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert`Please, fill in all the fields!`;
       
    }
   const newObj = { email: email.value, password: password.value };
         console.log(newObj);
    
    event.currentTarget.reset();
}
 