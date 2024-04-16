**Nom :** Delpech Nicolas, Kochat Nahel, Thomazeau-Agullo Louis, Razanamasy Henintsoa

**Groupe :** N°2 -A

**Année :** 2023/2024

**IUT Le Havre - Projet_SAE**

### Compte-rendu du Projet_SAE

**Objectif**

Pour notre projet nous avons décider de faire une application qui permet aux utilisateurs de regarder des vidéos à leur demande.

**------------------------------------------------------------------------**

**Liste des commandes utiliser**

**.** git add

**.** git commit -m

**.** git push

**.** git pull

**.** git checkout

**.** git add

**.** docker ps -a

**.** docker run -d -p 8080:80 nom_image

**.** docker build -t nom_image .

**------------------------------------------------------------------------**

## Partie HTML, CSS, JavaScript

**Etape 1**
Au tout début nous avons commencer à créer un tout nouveau répertoir dans Githube pour que notre groupe puisse avoir
un moyen de communication pour se partager les dossiers de notre projet se qui donne comme ceci :

![alt text](./img/image.png)


**Etape 2**
Pour commencer notre projet nous avons commencer à programmer en HTML et CSS la base de notre application
qui donne comme ceci :

![alt text](./img/image-1.png)

**Etape 3**
Ensuite nous avons réfléchie à des idées pour améliorer notre application.

**Liste des idées à mettre dans notre application**

* Faire une page de connexion pour l'utilisateur
* Faire un bouton de Téléchargement pour télécharger la vidéo qui correspond
* Faire un bouton Importation de fichier -- > ça permet à l'utilisateur d'importer une vidéo pour ensuite la publier
* Faire un bouton Supprimer pour qu'on puisse supprimer la vidéo qu'on a poster

**⚠️Attention⚠️** dans le code JavaScript pour le bouton télécharger, supprimer et importer nous aurons besoin d'autre focntion qui
nous permet mettre à jour les vidéos dans le stockage local, pour charger les vidéos depuis le stockage local lors du chargement de la page.

**Code des focntion JavaScript**
![alt text](./img/image-10.png) ![alt text](./img/image-11.png)

**Etape 4 : La page de connexion**
Pour la page de connexion nous avons utiliser le language JavaScript pour que notre application est des interactions et dynamique.
Ce language nous sert pour la page de connexion de notre application, le bouton du téléchargement, le bouton supprimer et enfin le
bouton d'importer.

**Représentation du code JavaScrip du Login**				**|**		**Représentation final de la page de Connexion**
![alt text](./img/image-2.png)								**|**		![alt text](./img/image-3.png)


**Etape 5 : Le bouton Téléchargement**
Pour le bouton téléchargement nous utiliser un site internet qui nous permet d'avoir le lien de notre vidéo en public et de l'avoir
en lecteur MP4.

**Démonstration**					**|**		**Code JavaScript**
![alt text](./img/image-4.png)		**|**		![alt text](./img/image-5.png) ![alt text](./img/image-6.png)


**Etape 6 : Le bouton Supprimer**
Pour le bouton supprimer c'est la même chose que le bouton télécharger on le procède le code dans le même fichier

**Code JavaScript pour le bouton supprimer**
![alt text](./img/image-7.png)

![alt text](./img/image-8.png)

**Etape 7 : Le bouton Importer**
Notre chef d'équipe avais proposer une idée de faire un bouton qui permet à l'utilisateur de importer une vidéo dans notre
application.

**Code JavaScript pour le bouton importer**
![alt text](./img/image-9.png)


## Partie Docker

**Etape 1**
Nous devons créer un fichier qui est Dockerfile qui est un fichier texte qui contient toutes les instructions nécessaires pour construire une image Docker. Une image Docker est un modèle de déploiement léger et portable qui contient tout le nécessaire pour exécuter une application, y compris le code, les bibliothèques, les dépendances, les variables d'environnement et les fichiers de configuration.

**Fichier Dockerfile**

![alt text](./img/image-12.png)


**Etape 2**
Nous allons taper la commande : docker buil -t nom_image .
Cette commande permet de créer l'image qu'on veut en lui donnant un nom.
Ensuite nous allons taper la commande : docker run -d -p 8080:80 nom_image

Enfin pour vérifier que ça à bien marcher vérfier que votre serveur à bien été créer dans votre logiciel Docker
vous pouvez où sinon de taper la commande : docker ps -a