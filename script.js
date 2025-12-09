// ===========================
// HAMBURGER MENU FUNCTIONALITY
// ===========================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===========================
// PORTFOLIO FILTER FUNCTIONALITY
// ===========================

function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0) return;

    // Add active class to first button
    filterButtons[0].classList.add('active');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('fade-in-up');
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===========================
// FORM SUBMISSION
// ===========================

function setupFormSubmission() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.querySelector('input[name="name"]');
            const email = document.querySelector('input[name="email"]');
            const phone = document.querySelector('input[name="phone"]');
            const message = document.querySelector('textarea[name="message"]');

            // Basic validation
            if (!name.value || !email.value || !phone.value || !message.value) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }

            // Phone validation (South African format)
            const phoneRegex = /^(\+27|0)[1-9]\d{8}$/;
            if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
                alert('Please enter a valid South African phone number');
                return;
            }

            // Show success message
            alert('Thank you for your message! We will get back to you shortly.');
            
            // Reset form
            contactForm.reset();

            // Here you would typically send the form data to a server
            // Example: sendFormData(name.value, email.value, phone.value, message.value);
        });
    }
}

// ===========================
// SCROLL ANIMATION
// ===========================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .project-card, .info-block').forEach(el => {
        observer.observe(el);
    });
}

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===========================
// ACTIVE NAV LINK
// ===========================

function setupActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.style.color = '#0fa958';
            link.style.fontWeight = 'bold';
        }
    });
}

// ===========================
// INITIALIZE ALL FUNCTIONS
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    setupPortfolioFilter();
    setupFormSubmission();
    setupScrollAnimations();
    setupSmoothScroll();
    setupActiveNavLink();
});

// ===========================
// LAZY LOAD IMAGES
// ===========================

if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===========================
// VIDEO AUTOPLAY POLYFILL
// ===========================

window.addEventListener('load', () => {
    const video = document.querySelector('.hero-video');
    if (video) {
        // Attempt autoplay
        video.play().catch(() => {
            console.log('Autoplay prevented by browser');
        });
    }
});
