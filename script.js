// WhatsApp Redirection Function
function redirectToWhatsApp() {
    window.open('https://wa.me/919650086438', '_blank');
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
        });
    });
}

// Smooth Scrolling
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

// Set Active Link Based on Current Page
function setActiveLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        
        if (href === currentLocation || 
            (currentLocation === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize active link on page load
document.addEventListener('DOMContentLoaded', setActiveLink);

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});