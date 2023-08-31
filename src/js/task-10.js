function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnBox = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + (i * 10);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  };
};

function destroyBoxes(amount) { 
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  const amount = inputEl.value;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);

console.log(boxes);
