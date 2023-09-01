const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');



const changeFontSize = (event) => {
    spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input',changeFontSize);