let counterValue = 0;


const counterBox = document.querySelector('#counter');
const valueEL = document.querySelector('#value');

const decrementBtn = counterBox.firstElementChild;
const incrementBtn = counterBox.lastElementChild;

const updateCounterValue = (newValue) => {
  counterValue = newValue;
  valueEL.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  updateCounterValue(counterValue - 1);
});
incrementBtn.addEventListener("click", () => {
  updateCounterValue(counterValue + 1);
});


console.log();
console.log(counterValue);

