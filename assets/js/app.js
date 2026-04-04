/*
 * File: app.js
 * Description: Handles reveal animations and phone screenshot rotation for CoralOrbit.
 * Version: 10.0.0
 */

// Reveal animation on scroll
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Phone screenshot rotation
const rotateScreenshots = () => {
    const screenshots = document.querySelectorAll('.phone-screenshot');
    if (screenshots.length === 0) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        screenshots[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % screenshots.length;
        screenshots[currentIndex].classList.add('active');
    }, 3000);
};

// Initialize on load
window.addEventListener('scroll', revealElements);
window.addEventListener('load', () => {
    revealElements();
    rotateScreenshots();
});
