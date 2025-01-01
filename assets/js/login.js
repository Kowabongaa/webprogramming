document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
  
    // Mock credentials for simplicity
    const validCredentials = {
      username: 'admin',
      password: 'password123'
    };
  
    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Validate credentials
      if (username === validCredentials.username && password === validCredentials.password) {
        // Store login state
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);
  
        // Redirect to homepage or dashboard
        window.location.href = 'index.html';
      } else {
        // Show error message
        loginError.textContent = 'Invalid username or password. Please try again.';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('#login-link');
  
    // Check login state
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const username = localStorage.getItem('username');
  
    if (isLoggedIn) {
      loginLink.textContent = `Logout (${username})`;
      loginLink.href = '#';
  
      // Add logout functionality
      loginLink.addEventListener('click', () => {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('username');
        alert('You have been logged out.');
        window.location.href = 'index.html';
      });
    } else {
      loginLink.textContent = 'Login';
      loginLink.href = 'login.html';
    }
  });
  