document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const stickyHeader = () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    };
    document.addEventListener('scroll', stickyHeader);
  }

  /**
   * Scroll top button
   */
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

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  const mobileNavToggle = () => {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavShow && mobileNavHide) {
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
  };

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      mobileNavToggle();
    });
  });

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  navDropdowns.forEach(el => {
    el.addEventListener('click', (event) => {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        el.classList.toggle('active');
        el.nextElementSibling.classList.toggle('dropdown-active');

        const dropDownIndicator = el.querySelector('.dropdown-indicator');
        if (dropDownIndicator) {
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      }
    });
  });

  /**
   * Dynamic cart update
   */
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const shoppingBag = document.querySelector('#shopping-bag');
  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (shoppingBag) shoppingBag.textContent = `🛒 Cart (${totalItems})`;
  };
  updateCartCount();

  /**
   * Login button dynamic state
   */
  const loginLink = document.querySelector('#login-link');
  const isLoggedIn = localStorage.getItem('userLoggedIn'); // Simulated state
  if (loginLink) {
    if (isLoggedIn) {
      loginLink.textContent = 'Logout';
      loginLink.href = 'logout.html';
    } else {
      loginLink.textContent = 'Login';
      loginLink.href = 'login.html';
    }
  }

  /**
   * Initiate PureCounter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Initiate GLightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Init Swiper slider with 1 slide at once in desktop view
   */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  /**
   * Animation on scroll function and init
   */
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
