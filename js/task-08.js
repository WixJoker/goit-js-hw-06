const emailRef = document.querySelector('[type="email"]');
const passwordRef = document.querySelector('[type="password"]');
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { emailRef, passwordRef },
  } = event.currentTarget;
  console.log(emailRef.value, passwordRef.value);
  if (emailRef.value === '' || passwordRef.value === '') {
    return alert('All fields should be filled out!');
  }
  console.log(`Login: ${emailRef.value}, Password: ${passwordRef.value}`);
  event.currentTarget.reset();
});
