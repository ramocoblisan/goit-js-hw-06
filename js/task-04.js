let counterValue = 0;
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");
const handleClickDecr = () => {
    span.textContent = --counterValue;
  };

const handleClickIncr = () => {
    span.textContent = ++counterValue;
};

decrButton.addEventListener("click", handleClickDecr);
incrButton.addEventListener("click", handleClickIncr);
