const formEl = document.querySelector('.login-form');



formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formEls = {}
    
    formData.forEach((value, name) => {
        formEls[name] = value;
    });

    if (!formEls.email || !formEls.password) {
        alert('Please fill all fields!')
    };
    console.log(formEls);

    formEl.reset();
});



