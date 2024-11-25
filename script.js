function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroSection.offsetTop && scrollPosition < heroSection.offsetTop + heroSection.clientHeight) {
        heroSection.style.opacity = '0.9';
    } else {
        heroSection.style.opacity = '1';
    }
});