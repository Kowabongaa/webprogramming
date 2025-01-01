const container = document.getElementById('container');
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');

if (signUp) {
  signUp.addEventListener('click', () => {
    loginIn.classList.add('none');
    loginUp.classList.remove('none');
  });
}

if (signIn) {
  signIn.addEventListener('click', () => {
    loginUp.classList.add('none');
    loginIn.classList.remove('none');
  });
}
