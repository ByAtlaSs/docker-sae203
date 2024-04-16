# Youtube Clone
## Installation d’un service de vidéo à la demande grâce à github, et docker.

## Membres de l’équipe
* A2 - Delpech Nicolas
* A1 - Kochat Nahel
* A1 - Razanamasy Henintsoa
* A1 - Thomazeau-Agullo Louis

## Instructions
### Collaborer en équipe
  ``` git clone git@github.com:ByAtlaSs/docker-sae203.git```
### Allez dans le dossier cloner
```cd docker-sae203```
### Créer les dossiers de base de l'API
  ```Mkdir img css videos```
### Créer les fichiers pour la gestion de l'API
  ```touch index.html DockerFile app.js```
### Créer un ```README.md``` pour expliquer le projet
  ```touch README.md```
### Créer un fichier gestion des login
  ```touch login.html login.js checkLogin.js login.css```
### Modifer le fichier ```DockerFile``` pour la gestion de l'API
```
  	FROM debian:latest

  	FROM nginx:latest
	
	COPY . /usr/share/nginx/html
	
	EXPOSE 80
```

### Construisez l'image décrite dans dockerfile avec docker build :
  ```docker build -t youtube.```

### Exécutez l'image avec docker run :
  ```docker run -d -p 8080:80 youtube```

### Vérifiez que le conteneur est en cours d'exécution avec docker ps :
  ```docker ps```

### Pour voir le résultat, ouvrez un navigateur et allez à l'adresse suivante :
  ```http://localhost:8080```

### Pour arrêter le conteneur, utilisez la commande suivante :
  ```docker stop youtube```


## Fonctionnalités
- [x] Consulter des vidéos
- [x] Ajouter des vidéos
- [x] Supprimer des vidéos
- [x] Télécharger des vidéos
- [x] Se connecter

## Langages utilisés
- HTML
- CSS
- JavaScript
- Docker
