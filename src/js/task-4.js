const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.email.value === '' || form.password.value === '') {
        alert('All form fields must be filled in');
    } else {
        const formData = {
            email: form.email.value,
            password: form.password.value,
        };
        console.log(formData);
        form.reset();
    }
});
