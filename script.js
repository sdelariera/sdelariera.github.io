// script.js

// Smooth scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Scroll animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add('active');
        }
    });
};

// Active navigation highlighting
const highlightNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        let id = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Event Listeners
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

window.addEventListener('scroll', () => {
    animateOnScroll();
    highlightNav();
});