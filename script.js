function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const productsSection = document.querySelector('#products');
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroSection.offsetTop && scrollPosition < productsSection.offsetTop) {
        heroSection.style.opacity = '0.9';
    } else {
        heroSection.style.opacity = '1';
    }
});