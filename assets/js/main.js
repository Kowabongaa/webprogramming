document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Sticky Header
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const stickyHeader = () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    };
    document.addEventListener('scroll', stickyHeader);
  }

  // Scroll-to-Top Button
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    };
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    scrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Mobile Nav Toggle
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');
  const mobileNavToggle = () => {
    const body = document.querySelector('body');
    body.classList.toggle('mobile-nav-active');
    if (mobileNavShow && mobileNavHide) {
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
  };

  if (mobileNavShow && mobileNavHide) {
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        mobileNavToggle();
      });
    });
  }

  // Cart Update
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const shoppingBag = document.querySelector('#shopping-bag');
  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (shoppingBag) shoppingBag.textContent = `🛒 Cart (${totalItems})`;
  };
  updateCartCount();

  // Login State
  const loginLink = document.querySelector('#login-link');
  const isLoggedIn = localStorage.getItem('userLoggedIn');
  if (loginLink) {
    loginLink.textContent = isLoggedIn ? 'Logout' : 'Login';
    loginLink.href = isLoggedIn ? 'logout.html' : 'login.html';
  }

  // AOS Initialization
  const aosInit = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  };
  window.addEventListener('load', aosInit);
});
