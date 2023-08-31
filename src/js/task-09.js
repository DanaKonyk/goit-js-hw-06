function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.body;


const changeBodycolor = () => {
  const newBodyColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newBodyColor;
  spanEl.textContent = newBodyColor;
}

changeColorBtn.addEventListener('click', changeBodycolor);