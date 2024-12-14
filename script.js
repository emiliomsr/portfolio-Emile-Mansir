// Scroll Animation: Animation d'apparition des sections au défilement
const sections = document.querySelectorAll('.section, .introduction');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation des styles pour l'animation
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Mode Nuit/Jour
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Mode Nuit';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.zIndex = '1000';
toggleButton.style.backgroundColor = '#00000';
toggleButton.style.color = 'white';
toggleButton.style.padding = '10px 20px';
toggleButton.style.borderRadius = '10px';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

let isNightMode = false;
toggleButton.addEventListener('click', () => {
    isNightMode = !isNightMode;
    document.body.style.backgroundColor = isNightMode ? '#333' : '#F4F9FF';
    document.body.style.color = isNightMode ? '#F4F9FF' : '#333';
    toggleButton.textContent = isNightMode ? 'Mode Jour' : 'Mode Nuit';
});

// Effets au survol des sections
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        section.style.transform = 'scale(1.02)';
    });
    section.addEventListener('mouseout', () => {
        section.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        section.style.transform = 'scale(1)';
    });
});
