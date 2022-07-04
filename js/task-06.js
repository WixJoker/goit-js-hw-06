const inputData = document.querySelector('#validation-input');
const greenBorder = document.querySelector('#validation-input.valid');
const redBorder = document.querySelector('#validation-input.invalid');
const symbolsNumber = document.querySelector('[data-length]');

// function onInputBlur() {
//   if (symbolsNumber !== 6) {
//     inputData === redBorder;
//   } else inputData === greenBorder;
// }

inputData.onchange = function () {
  if (inputData.value.length != 6) {
    inputData.style.borderColor = redBorder;
  }
  inputData.style.borderColor = greenBorder;
};
