const enteredName = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

enteredName.addEventListener('input', () => {
  if (enteredName.value.trim() !== '') {
    spanValue.textContent = enteredName.value.trim();
  }
  spanValue.textContent === 'Anonymous';
});
