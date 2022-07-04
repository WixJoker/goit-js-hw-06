const inputData = document.querySelector('#validation-input');
const greenBorder = document.querySelector('#validation-input.valid');
const redBorder = document.querySelector('#validation-input.invalid');
const symbolsNumber = document.querySelector('[data-length]');

inputData.addEventListener('blur', () => {
  if ((String(inputData.value.trim()).length = symbolsNumber)) {
    inputData.style.borderColor === greenBorder;
  }
  inputData.style.borderColor === redBorder;
});
