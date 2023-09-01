let counterValue = 0;


const counterBox = document.querySelector('#counter');
const valueEL = document.querySelector('#value');

const decrementBtn = counterBox.firstElementChild;
const incrementBtn = counterBox.lastElementChild;

const updateCounterValue = (newValue) => {
  valueEL.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();

});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();

});


console.log();
console.log(updateCounterValue);


