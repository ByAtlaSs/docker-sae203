// Vérifier si l'utilisateur est déjà connecté
const storedUsername = localStorage.getItem('username');

// Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
if (!storedUsername) {window.location.href = 'login.html';}