const videoCardContainer = document.querySelector('.video-container');

let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

// Fonction pour ajouter une vidéo locale au conteneur de vidéos avec un bouton de téléchargement
function addLocalVideo(videoURL, downloadURL) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');

    videoElement.innerHTML = `
        <div class="video">
            <video controls width="400" height="225">
                <source src="${videoURL}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="content">
                <div class="info">
                    <h4 class="title">Vidéo locale ajoutée</h4>
                    <p class="channel-name">Utilisateur</p>
                    <button class="download-button" data-url="${downloadURL}">Télécharger</button>
                </div>
            </div>
        </div>
    `;

    videoContainer.appendChild(videoElement);
}

// Exemple : Ajouter une vidéo locale avec un lien de téléchargement spécifique
addLocalVideo('./videos/miaou.mp4', 'https://softparade.net/download/file?id=32271871.661dc6041922e6.98669386');
addLocalVideo('./videos/anime.mp4', 'https://softparade.net/download/file?id=32271859.661dc59eb75277.19676178');
addLocalVideo('./videos/pays.mp4', 'https://softparade.net/download/file?id=32271869.661dc5be7faab6.97168496');

// Sélectionner tous les boutons de téléchargement et ajouter un gestionnaire d'événements pour le téléchargement
const downloadButtons = document.querySelectorAll('.download-button');
downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const downloadURL = this.getAttribute('data-url');
        window.location.href = downloadURL;
    });
});