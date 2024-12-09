// Fonctionnalité pour zoomer sur la photo de profil au clic
document.querySelector('.profile-pic').addEventListener('click', function() {
    this.classList.toggle('zoomed');
});

// Fonctionnalité de scroll animée pour les liens internes
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Décalage pour tenir compte du header
            behavior: 'smooth'
        });
    });
});

// Fonctionnalité pour afficher un message à l'utilisateur lors du survol d'un bouton
document.querySelectorAll('button, a.button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        console.log('Vous êtes sur le bouton !');
    });
});
