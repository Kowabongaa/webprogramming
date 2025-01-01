document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const signupSuccess = document.getElementById('signup-success');
  const signupError = document.getElementById('signup-error');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      signupError.textContent = 'Username and password are required.';
      signupSuccess.textContent = '';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      signupError.textContent = 'Username already exists. Please choose another one.';
      signupSuccess.textContent = '';
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    signupSuccess.textContent = 'Sign-up successful! Redirecting to the home page...';
    signupError.textContent = '';

    setTimeout(() => {
      window.location.href = 'login.html'; 
    }, 1500);

    console.log('User signed up:', { username, password });
    console.log('All users:', users);
  });
});
