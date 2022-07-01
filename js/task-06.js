const inputData = document.querySelector('#validation-input');
const greenColorBorder = document.querySelector('#validation-input.valid');
const redColorBorder = document.querySelector('#validation-input.invalid');
const enteredNumber = document.querySelector('[data-length]');
const relevantNumber = 6;

const checkNumber = inputData.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (enteredNumber !== relevantNumber) {
    inputData.border - color === redColorBorder;
  } else enteredNumber === relevantNumber;
  {
    inputData.border - color === greenColorBorder;
  }
}
