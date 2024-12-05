
 // Écouter le défilement
    window.addEventListener('scroll', revealSectionsOnScroll);

    // Exécuter la fonction pour les sections déjà visibles au chargement
    revealSectionsOnScroll();

    // 2. Effet de survol animé sur les éléments de liste (compétences, expérience, etc.)
    const listItems = document.querySelectorAll('li');

    listItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'all 0.3s ease';
            item.style.color = '#3498db'; // Change la couleur au
