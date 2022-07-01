const enteredName = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

enteredName.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (enteredName.value !== '') {
    event.currentTarget.value === spanValue.textContent;
  }
  spanValue.textContent === 'Anonymous';
}
