const enteredName = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

enteredName.addEventListener('input', event => {
  enteredName.value.trim() === ''
    ? (spanValue.textContent = 'Anonymous')
    : (spanValue.textContent = enteredName.value.trim());
});
