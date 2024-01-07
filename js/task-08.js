const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if ( email === "" || password === "") {
        alert('Please fill in all fields');
        return;
    }

    const formData = {
        email,
        password
    };

    console.log(formData);

    form.reset();
};