/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');

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

// Login Handler
document.querySelector('.login__registre .login__button').addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.querySelector('#login-in input[type="text"]').value;
    const password = document.querySelector('#login-in input[type="password"]').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Send login data to the server
    fetch('login-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect to home page
            }, 1500);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
