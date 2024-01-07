function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;

  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = randomColor;
}

const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener("click", changeColor);