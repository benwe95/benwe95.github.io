---
title: Suite Notepad
overview: Ecosystèmes web combinant un site principal avec Symfony, une SWA avec Angular et une application mobile avec ionic.
tags: [Symfony, Angular, Ionic, REST API, Full Stack, Mobile]
---

## Contexte

Dans le cadre d'un cours de développement web nous avons réalisé une application destinée à enregistrer des notes quelconques. L'intérêt du projet est d'implémenter plusieurs services (un site principal, une SPA, une application mobile), qui accèdent tous à une base de données commune au moyen d'une API REST développée en backend.

Ainsi, depuis n'importe quelle plateforme, l'utilisateur doit être capable d'accéder à son profil et à sa liste de notes enregistrées. Il doit également entre autres pouvoir ajouter/modifier/supprimer une note et faire des recherches par mots-clés.

## Aperçu

L'*écosystème* Notepad consiste en un ensemble de différentes technologies web qui communiquent avec la base de données via une API REST.

### Un backend/frontend Symfony + PostgreSQL + API REST ([github](https://github.com/benwe95/ECAM-SYMFONY))

Le composant principal de l'écosystème a été implémenté au moyen du framework Php Symfony 4. 

La gestion de la base de données PostgreSQL est effectuée grâce à l'ORM doctrine qui permet de facilement manipuler les données sous formes d'objets.

Une API REST permet d'offrir des services de requêtes vers la base de données pour d'autres applications.

### Une *Single Page Application* avec Angular ([github](https://github.com/benwe95/ECAM-ANGULAR))

Il s'agit d'un application à page unique qui est exécutée depuis le navigateur de l'utilisateur. Elle a été implémentée en Typescript avec le framework Angular. Depuis cette application, l'utilisateur peut faire des requêtes à la base de données commune grâce à l'API REST.

### Une application mobile *cross-patform* avec Ionic ([github](https://github.com/benwe95/ECAM-IONIC))

Une application mobile qui est cross-plateform, réalisée à partir de technologies web grâce au framework Ionic.