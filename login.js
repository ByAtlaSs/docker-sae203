// Fonction pour gérer la soumission du formulaire de connexion
function handleLogin(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupérer les valeurs du nom d'utilisateur et du mot de passe
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifier les informations d'identification (vous pouvez implémenter votre propre logique de validation ici)

    // Stocker le nom d'utilisateur dans le stockage local du navigateur
    localStorage.setItem('username', username);

    // Rediriger l'utilisateur vers la page d'accueil
    window.location.href = 'index.html';
}

// Sélectionner le formulaire de connexion
const loginForm = document.getElementById('login-form');

// Ajouter un gestionnaire d'événements pour la soumission du formulaire
loginForm.addEventListener('submit', handleLogin);