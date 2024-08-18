document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Particle effect
    document.body.addEventListener('mousemove', (e) => {
        const particles = document.createElement('div');
        particles.className = 'particle';
        particles.style.left = `${e.clientX}px`;
        particles.style.top = `${e.clientY}px`;
        document.body.appendChild(particles);

        setTimeout(() => {
            particles.remove();
        }, 1000);
    });
});
