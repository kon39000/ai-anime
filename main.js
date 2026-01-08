import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.section-title, .hero-sub, .hero-desc, .why-now p, .choice-card, .feature-item, .relationship-flow, .mb-large');
    animatedElements.forEach(el => {
        el.classList.add('fade-init');
        observer.observe(el);
    });

    // Parallax Hero
    const heroBg = document.querySelector('.hero-bg img');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
        }
    });

    // Smooth Scroll wrapper for more control (optional, but CSS scroll-behavior: smooth is usually enough)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
