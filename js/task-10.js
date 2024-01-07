function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amountInput = document.querySelector('#controls input');
  const amount = parseInt(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
};

const buttonCreate = document.querySelector('button[data-create]');
buttonCreate.addEventListener("click", createBoxes);

const buttonDestroy = document.querySelector('button[data-destroy]');
buttonDestroy.addEventListener("click", destroyBoxes);