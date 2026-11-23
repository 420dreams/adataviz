adataviz
Petit site qui affiche les bureaux de vote de Paris en 2025 sous forme de cartes.

Fonctionnement
Le site récupère les données de l'API [Open Data Paris](https://opendata.paris.fr/explore/dataset/bureaux-de-vote-2025/) avec `fetch`. Il crée ensuite une carte pour chaque bureau de vote.

Chaque carte affiche :
- le nom du lieu (ex. : École maternelle)
- l'adresse
- le code postal
- l'identifiant du bureau (arrondissement-numéro)

Fichiers
 Fichier : Rôle 

 `index.html` : Structure de la page 
 `style.css` : Mise en forme (grille de cartes responsive) 
 `main.js` : Récupération des données et création des cartes 
 `logo.svg` : Logo du site 

Lancer le projet
Le script est chargé en module (`type="module"`), donc il faut passer par un serveur local plutôt que d'ouvrir le fichier directement.