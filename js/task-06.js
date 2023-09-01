const inputEl = document.querySelector('#validation-input');


const checkDataLength = (event) => {

    const inputValue = inputEl.value.length;
    const dataLength = parseInt(inputEl.getAttribute('data-length'));
    
    if (dataLength === inputValue) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener("blur", checkDataLength);