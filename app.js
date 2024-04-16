// Sélectionner l'élément conteneur des vidéos
const videoContainer = document.querySelector('.video-container');

// Sélectionner l'élément input de type "file" pour l'importation des vidéos
const videoInput = document.getElementById('videoInput');

// Ajouter un gestionnaire d'événements pour détecter lorsque l'utilisateur sélectionne un fichier
videoInput.addEventListener('change', handleVideoImport);

// Fonction pour ajouter une vidéo locale au conteneur de vidéos avec un bouton de téléchargement et de suppression
function addLocalVideo(videoURL, downloadURL, fileName, id) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');
    videoElement.setAttribute('data-id', id);

    videoElement.innerHTML = `
        <div class="video">
            <video controls width="400" height="225">
                <source src="${videoURL}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="content">
                <div class="info">
                    <h4 class="title">${fileName}</h4>
                    <p class="channel-name">Utilisateur</p>
                    <button class="download-button" data-url="${downloadURL}">Télécharger</button>
                    <button class="delete-button">Supprimer</button>
                </div>
            </div>
        </div>
    `;

    videoContainer.appendChild(videoElement);

    // Sélectionner le bouton de téléchargement de cette vidéo
    const downloadButton = videoElement.querySelector('.download-button');
    
    // Ajouter un gestionnaire d'événements pour le téléchargement de la vidéo
    downloadButton.addEventListener('click', function(event) {
        const downloadURL = this.getAttribute('data-url');
        window.location.href = downloadURL;
    });

    // Sélectionner le bouton de suppression de cette vidéo
    const deleteButton = videoElement.querySelector('.delete-button');
    
    // Ajouter un gestionnaire d'événements pour supprimer la vidéo
    deleteButton.addEventListener('click', function(event) {
        const videoID = videoElement.getAttribute('data-id');
        deleteLocalVideo(videoID);
        // Supprimer l'élément vidéo du DOM
        videoElement.remove();
        // Mettre à jour les vidéos dans le stockage local après la suppression
        updateLocalStorage();
    });
}

// Fonction pour ajouter une vidéo locale avec un lien de téléchargement spécifique
addLocalVideo('./videos/miaou.mp4', 'https://softparade.net/download/file?id=32274713.661df07f13eed8.30619297', 'miaou.mp4', 'miaou');
addLocalVideo('./videos/anime.mp4', 'https://softparade.net/download/file?id=32271859.661dc59eb75277.19676178', 'anime.mp4', 'anime');
addLocalVideo('./videos/pays.mp4', 'https://softparade.net/download/file?id=32271869.661dc5be7faab6.97168496', 'pays.mp4', 'pays');

// Fonction pour supprimer une vidéo du stockage local
function deleteLocalVideo(videoID) {
    // Récupérer les vidéos depuis le stockage local
    let videos = localStorage.getItem('videos');
    videos = videos ? JSON.parse(videos) : [];

    // Trouver l'index de la vidéo à supprimer dans le tableau
    const index = videos.findIndex(video => video.id === videoID);

    // Supprimer la vidéo du tableau
    if (index !== -1) {
        videos.splice(index, 1);
    }

    // Mettre à jour les vidéos dans le stockage local
    localStorage.setItem('videos', JSON.stringify(videos));

    // À compléter avec votre logique de suppression si nécessaire
    console.log('Supprimer la vidéo :', videoID);
}

// Fonction pour mettre à jour les vidéos dans le stockage local
function updateLocalStorage() {
    // Sélectionner tous les éléments vidéo
    const videos = document.querySelectorAll('.video');

    // Créer un tableau pour stocker les détails de chaque vidéo
    const videoList = [];

    // Parcourir tous les éléments vidéo et récupérer les détails de chaque vidéo
    videos.forEach(videoElement => {
        const video = {
            id: videoElement.getAttribute('data-id'),
            url: videoElement.querySelector('video').getAttribute('src'),
            name: videoElement.querySelector('.title').textContent
        };
        videoList.push(video);
    });

    // Enregistrer la liste des vidéos dans le stockage local
    localStorage.setItem('videos', JSON.stringify(videoList));
}

// Fonction pour charger les vidéos depuis le stockage local lors du chargement de la page
function loadVideosFromLocalStorage() {
    // Vérifier si des vidéos sont enregistrées localement
    if (localStorage.getItem('videos')) {
        // Récupérer les vidéos depuis le stockage local
        const videos = JSON.parse(localStorage.getItem('videos'));

        // Ajouter chaque vidéo à la liste de vidéos sur la page
        videos.forEach(video => {
            addLocalVideo(video.url, '', video.name, video.id);
        });
    }
}

// Appeler la fonction pour charger les vidéos depuis le stockage local lors du chargement de la page
loadVideosFromLocalStorage();

// Fonction pour gérer l'importation des vidéos
function handleVideoImport(event) {
    const files = event.target.files; // Récupérer les fichiers vidéo sélectionnés

    // Parcourir tous les fichiers sélectionnés
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Vérifier si le fichier est une vidéo
        if (file.type.startsWith('video/')) {
            const videoURL = URL.createObjectURL(file); // Convertir le fichier en URL vidéo

            // Générer un ID unique pour la vidéo
            const videoID = 'video_' + Date.now();

            // Ajouter la vidéo à la liste de vidéos
            addLocalVideo(videoURL, '', file.name, videoID);

            // Enregistrer la vidéo dans le stockage local du navigateur
            updateLocalStorage();
        } else {
            // Gérer le cas où le fichier n'est pas une vidéo
            console.error('Le fichier sélectionné n\'est pas une vidéo :', file.name);
        }
    }

    // Effacer la sélection de fichiers pour permettre l'importation de plusieurs vidéos
    videoInput.value = null;
}