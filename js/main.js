document.addEventListener('DOMContentLoaded', () => {
    // Inject Background Animation if not present
    if (!document.querySelector('.bg-animation')) {
        const bgAnim = document.createElement('div');
        bgAnim.className = 'bg-animation';
        bgAnim.innerHTML = `
            <div class="bg-orb orb-1"></div>
            <div class="bg-orb orb-2"></div>
            <div class="bg-orb orb-3"></div>
        `;
        document.body.prepend(bgAnim);
    }

    // Page Loader
    const loader = document.querySelector('.page-transition');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
        }, 300);
    }

    // Scroll Animations
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Sticky Nav & Scroll Top
    const nav = document.querySelector('nav');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 0';
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.style.padding = '1.2rem 0';
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
        }

        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Typewriter Effect
    const typeTarget = document.querySelector('.typewriter');
    if (typeTarget) {
        const text = typeTarget.getAttribute('data-text');
        let i = 0;
        const type = () => {
            if (i < text.length) {
                typeTarget.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        };
        setTimeout(type, 1000);
    }

    // Floating Particles Generation
    const bg = document.querySelector('.bg-animation');
    if (bg) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 100 + 'vh';
            
            const duration = Math.random() * 15 + 10 + 's';
            const delay = Math.random() * 10 + 's';
            
            particle.style.animation = `float-particle ${duration} linear infinite`;
            particle.style.animationDelay = `-${delay}`;
            
            bg.appendChild(particle);
        }
    }
});
