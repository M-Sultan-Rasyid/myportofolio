document.addEventListener('mousemove', (e) => {
    const cursorEffect = document.getElementById('cursor-effect');
    if (cursorEffect) {
        cursorEffect.style.setProperty('--x', e.clientX + 'px');
        cursorEffect.style.setProperty('--y', e.clientY + 'px');
        cursorEffect.style.opacity = '1';
    } else {
    }
});

const sections = document.querySelectorAll('.section');


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });    
    });
});
