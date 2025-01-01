document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signupSuccess = document.getElementById('signup-success');
    const signupError = document.getElementById('signup-error');
  
    // Handle sign-up form submission
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Retrieve existing users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Check if the username is already taken
      const userExists = users.some((user) => user.username === username);
      if (userExists) {
        signupError.textContent = 'Username already exists. Please choose another one.';
        signupSuccess.textContent = '';
        return;
      }
  
      // Add the new user to the users array
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      // Show success message and redirect to login page
      signupSuccess.textContent = 'Sign-up successful! Redirecting to login page...';
      signupError.textContent = '';
      setTimeout(() => {
        window.location.href = 'login.html'; // Change this to your login page URL
      }, 2000);
    });
  });
  