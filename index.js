const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('.sign-up .form');
    const signInForm = document.querySelector('.sign-in .form');

    signUpForm.addEventListener('submit', (event) => {
        if (!validateSignUpForm()) {
            event.preventDefault();
        }
    });

    signInForm.addEventListener('submit', (event) => {
        if (!validateSignInForm()) {
            event.preventDefault();
        }
    });

    function validateSignUpForm() {
        const name = signUpForm.querySelector('input[placeholder="Name"]').value;
        const email = signUpForm.querySelector('input[placeholder="Email"]').value;
        const password = signUpForm.querySelector('input[placeholder="Password"]').value;

        if (name === '') {
            alert('Name must be filled out');
            return false;
        }
        if (email === '') {
            alert('Email must be filled out');
            return false;
        }
        if (password === '') {
            alert('Password must be filled out');
            return false;
        }
        return true;
    }

    function validateSignInForm() {
        const email = signInForm.querySelector('input[placeholder="Email"]').value;
        const password = signInForm.querySelector('input[placeholder="Password"]').value;

        if (email === '') {
            alert('Email must be filled out');
            return false;
        }
        if (password === '') {
            alert('Password must be filled out');
            return false;
        }
        return true;
    }
});

