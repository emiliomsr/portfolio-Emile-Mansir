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
toggleButton.style.backgroundColor = '#0097B2';
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

// Carrousel des Compétences
const skillsList = document.querySelector('#skills ul');
skillsList.style.display = 'flex';
skillsList.style.overflowX = 'auto';
skillsList.style.scrollBehavior = 'smooth';
skillsList.style.padding = '10px';

const leftArrow = document.createElement('button');
const rightArrow = document.createElement('button');
leftArrow.textContent = '<';
rightArrow.textContent = '>';
leftArrow.style.position = rightArrow.style.position = 'absolute';
leftArrow.style.top = rightArrow.style.top = '50%';
leftArrow.style.transform = rightArrow.style.transform = 'translateY(-50%)';
leftArrow.style.backgroundColor = rightArrow.style.backgroundColor = '#0097B2';
leftArrow.style.color = rightArrow.style.color = 'white';
leftArrow.style.border = rightArrow.style.border = 'none';
leftArrow.style.cursor = rightArrow.style.cursor = 'pointer';
leftArrow.style.padding = rightArrow.style.padding = '10px';
leftArrow.style.zIndex = rightArrow.style.zIndex = '1000';
leftArrow.style.left = '10px';
rightArrow.style.right = '10px';
document.body.appendChild(leftArrow);
document.body.appendChild(rightArrow);

leftArrow.addEventListener('click', () => {
    skillsList.scrollLeft -= 200;
});
rightArrow.addEventListener('click', () => {
    skillsList.scrollLeft += 200;
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
