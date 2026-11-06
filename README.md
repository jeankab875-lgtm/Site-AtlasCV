# Site légal d’Atlas CV

Pages : `index.html` (accueil), `confidentialite.html` (politique de confidentialité), `conditions.html` (conditions d’utilisation).

## Avant de publier
Remplacez les trois valeurs à personnaliser (nom de l’éditeur, e-mail de contact, pays) :

    sed -i 's/__EDITEUR__/Votre nom ou société/g; s/__EMAIL__/votre@email.com/g; s/__PAYS__/Votre pays/g' *.html

Évitez les caractères `/` et `&` dans ces valeurs.

## Publier avec GitHub Pages
1. Poussez les fichiers sur la branche `main` d’un dépôt GitHub.
2. Dépôt › Settings › Pages › Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site sera disponible sur `https://VOTRE-NOM.github.io/NOM-DU-DEPOT/`.
4. Liens à utiliser (Google Play, etc.) : `…/confidentialite.html` et `…/conditions.html`.

Pensez à mettre à jour la date « Dernière mise à jour » dans les deux pages légales à chaque modification.
