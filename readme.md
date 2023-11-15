# [Dans ma valise 🧳]

## À propos

L'objectif est de réaliser une application qui permet de générer une "packing list" pour un voyage,
dynamique selon :
le nombre de nuits
le climat

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 📚 [Documentation](#documentation)

## Prérequis

- HTML
- CSS
- JS

## Documentation


Interface

L'interface est libre. Vous pouvez vous inspirez de l'interface fournie en exemple (qui a été faire pour une
version plus complexe de l'application).
Vous devez faire un formulaire qui contient un input de type "number" (pour le nombre de nuits), une liste à
sélectionner <select> (pour le climat) et un bouton qui permet d'envoyer le formulaire.
Il y'a 3 climats possibles :

Modéré
Chaud
Froid

Vous afficherez le résultat du formulaire quand celui-ci est envoyé en créant une "packing list" contenant
des checkbox (et leur labels).
Vous ajouterez un bouton "Recommencer" qui fera office de reset : il cache les résultats et remets les
champs du formulaire à leur valeurs d'origines (3 nuits et climat modéré).
Vous devez respecter les standards HTML et les bonnes pratiques d'accessibilité.
N'oubliez pas de gérer le pluriel.

Règles de calcul

Vous devez respecter les règles de calcul suivantes pour l'affichage de la "packing list".
Nombre de nuits

Afficher :

Un sac à dos/valise (dans tous les cas)
Le nombre de paires de chaussettes :
correspond au nombre de nuits
Exemple : Pour 3 nuits, 3 paires de chaussettes
Maximum 10 paires de chaussettes
Le nombre de sous-vêtements :
correspond au nombre de nuits
Exemple : Pour 3 nuits, 3 sous-vêtements
Maximum 10 sous-vêtements
Le nombre de t-shirts
correspond au nombre de nuits
Exemple : Pour 3 nuits, 3 t-shirts
Maximum 10 t-shirts
Le nombre de pulls/sweats :
Moins de 4 nuits : 1 pull
Entre 4 et 6 nuits : 2 pulls
Plus de 6 nuits : 3 pulls
Maximum 3 pulls
Le nombre de pantalons :
Moins de 4 nuits : 1 pantalon
Entre 4 et 6 nuits : 2 pantalons
Plus de 6 nuits : 3 pantalons
Maximum 3 pantalons
Une veste (dans tous les cas, mais dépend du climat)
Le nombre de paires de chaussures :
Si plus de 6 nuits : 1 paire de chaussures

Climat

Climat chaud 🥵 :
Ne plus afficher la veste
Ajouter "tongs/claquettes" à la liste
Climat froid 🥶 :
Ajouter "gants et bonnets"

> 10 nuits

Si le voyage est un voyage de plus de 10 nuits, vous devez afficher un message indiquant :
Si vous partez en voyage plus de 10 nuits, faites des machines. Voyagez léger.

Gestion d'erreurs

Tous les champs du formulaires sont obligatoires.
Le nombre de nuits doit être strictement supérieur à 0.

