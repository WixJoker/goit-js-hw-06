const enteredName = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

enteredName.addEventListener('input', () => {
  spanValue.textContent = enteredName.value.trim() === '' ? 'Anonymous' : enteredName.value.trim();
});
