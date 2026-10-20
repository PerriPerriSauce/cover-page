document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.page-section');

    // --- Anchor Link Smooth Scrolling ---
    const navLinks = document.querySelectorAll('.home-nav a, .back-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Content Fade-In/Fade-Out Logic using Intersection Observer ---
    const observerOptions = {
        root: container,
        threshold: 0.7 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const content = entry.target.querySelector('.content');
            
            if (entry.isIntersecting) {
                content.classList.remove('content-hidden');
                content.classList.add('content-visible');
            } else {
                content.classList.remove('content-visible');
                content.classList.add('content-hidden');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Manually trigger the visibility for the initial Home section load
    document.querySelector('#home .content').classList.remove('content-hidden');
    document.querySelector('#home .content').classList.add('content-visible');
});