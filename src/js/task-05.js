const inputEL = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');


inputEL.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    spanEL.textContent = "Anonymous";
  } else {
    spanEL.textContent = event.currentTarget.value;
  }
});
