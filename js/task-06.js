const validationInput = document.getElementById('validation-input');

function checkdataLength () {
   const enteredValue = validationInput.value;
   const dataLength = parseInt(validationInput.getAttribute('data-length'));

   if (enteredValue.length === dataLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
   } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
   };
};

validationInput.addEventListener('blur', checkdataLength);