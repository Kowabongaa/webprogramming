document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
  
    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Validate credentials
      const user = users.find((user) => user.username === username && user.password === password);
      if (user) {
        // Store login state
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);
  
        // Redirect to main page
        window.location.href = 'index.html'; // Change this to your main page URL
      } else {
        // Show error message
        loginError.textContent = 'Invalid username or password. Please try again.';
      }
    });
  });
  