/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');

// Toggle between Sign In and Sign Up forms
signUp.addEventListener('click', () => {
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    loginIn.classList.toggle('none');
    loginUp.classList.toggle('block');
});

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    loginIn.classList.toggle('block');
    loginUp.classList.toggle('none');
});

// Remove unconditional redirection
// Redirect only on specific actions, like clicking the "Sign In" or "Sign Up" button
document.querySelector('.login__registre .login__button').addEventListener('click', (event) => {
    event.preventDefault();
    // Replace this with your login validation logic
    const username = document.querySelector('#login-in input[type="text"]').value;
    const password = document.querySelector('#login-in input[type="password"]').value;

    if (username === 'testuser' && password === 'testpass') {
        alert('Login successful!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500); // Redirect to index.html after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.querySelector('.login__create .login__button').addEventListener('click', (event) => {
    event.preventDefault();
    // Replace this with your sign-up logic
    const username = document.querySelector('#login-up input[placeholder="Username"]').value;
    const email = document.querySelector('#login-up input[placeholder="Email"]').value;
    const password = document.querySelector('#login-up input[placeholder="Password"]').value;

    if (username && email && password) {
        alert('Sign-up successful! Redirecting to login page...');
        setTimeout(() => {
            window.location.href = 'login.html'; // Redirect to login page
        }, 1500);
    } else {
        alert('Please fill in all fields.');
    }
});
