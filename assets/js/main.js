document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /**
   * Sticky Header
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const stickyHeader = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('sticked');
      } else {
        selectHeader.classList.remove('sticked');
      }
    };
    document.addEventListener('scroll', stickyHeader);
  }

  /**
   * Scroll-to-Top Button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Mobile Nav Toggle
   */
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
    document.querySelectorAll('.mobile-nav-toggle').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        mobileNavToggle();
      });
    });
  }

  /**
   * Cart Update
   */
  const shoppingBag = document.querySelector('#shopping-bag');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (shoppingBag) {
      shoppingBag.textContent = `🛒 Cart (${totalItems})`;
    }
  };
  
  updateCartCount();

  // Sync cart updates across tabs
  window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
      cart = JSON.parse(event.newValue) || [];
      updateCartCount();
    }
  });

  /**
   * Login/Logout Button
   */
  const loginLink = document.querySelector('#login-link');
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
  const username = localStorage.getItem('username');

  if (loginLink) {
    if (isLoggedIn) {
      loginLink.textContent = `Logout (${username})`;
      loginLink.href = '#';

      // Add logout functionality
      loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('username');
        alert('You have been logged out.');
        window.location.href = 'index.html'; // Redirect to the main page
      });
    } else {
      loginLink.textContent = 'Login';
      loginLink.href = 'login.html'; // Redirect to the login page
    }
  }

  /**
   * AOS Initialization
   */
  const aosInit = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  };
  
  window.addEventListener('load', aosInit);

  /**
   * Add to Cart Button Functionality
   */
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  const handleAddToCart = (event) => {
    const button = event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    if (!id || !name || isNaN(price)) {
      alert('Error: Invalid product data.');
      return;
    }

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to your cart.`);
  };

  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', handleAddToCart);
    });
  }
});
