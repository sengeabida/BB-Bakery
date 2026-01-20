// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Order Info
function toggleOrderInfo(button) {
    const orderInfo = button.nextElementSibling;
    if (orderInfo.style.display === 'none') {
        orderInfo.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        orderInfo.style.display = 'none';
        button.textContent = 'Order Now';
    }
}

// Send Order via WhatsApp
function sendOrder(product, quantityInputId) {
    const quantity = document.getElementById(quantityInputId).value;
    const phoneNumber = '+27 64 172 1524'; // Change this to your WhatsApp number
    const message = `Hello! I would like to place an order:\n\nProduct: ${product}\nQuantity: ${quantity}\n\nPlease confirm the delivery time and final price. Thank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
