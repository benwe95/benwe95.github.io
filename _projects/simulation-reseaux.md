---
title: Simulation réseaux
overview: Un projet qui consiste à simuler un réseau d'entreprise au moyen du logiciel Cisco Packet Tracer.
tags: [réseaux, cisco packet tracer]
---

## Contexte
L'objectif de ce travail était de simuler un réseau d'entreprise au moyen du logiciel Cisco Packet Tracer. Plusieurs contraintes, listées ci-dessous, ont dû être respectées afin de coller le plus possible à la réalité du terrain. De plus, toutes les configurations des machines simulées (routeurs, serveurs, switchs, ...) ont été faites via l'invite de commandes.

## Aperçu

<img alt="vue d'ensemble" src="/assets/images/simulation-reseaux.png" class="project-image"/>
[Agrandir](/assets/images/simulation-reseaux.png)

Ce projet a permis de mettre en pratique les connaissances théoriques du cours de réseaux, en allant plus loin dans les configurations techniques. Les éléments suivants ont été implémentés:

* Un réseau privé ECAM avec des sous-réseaux pour séparer les étudiants et l’administration
* Implémentation des sous-réseaux au moyen de VLANs
* Un réseau ICHEC capable d’atteindre un serveur privé sur le réseau ECAM
* Implémentation d’un service DHCP pour l’attribution des adresses IP privées du réseau ECAM
* Implémentation d’une translation NAT pour communiquer avec le réseau public
* Configuration d'un firewall pour contrôler le traffic vers le réseau ECAM
* Utilisation du protocole OSPF pour le réseau public reliant les deux sites privés
* Configuration d'un serveur web accessible sur le réseau public depuis une adresse statique et depuis son url via un serveur DNS
* Un tunnel VPN pour relier les réseaux ECAM et ICHEC de façon sécurisée
* Une DMZ pour améliorer la gestion des contrôles d’accès au réseau ECAM


Ce travail m'a particulièrement plu d'une part parce qu'il s'agit d'un domaine que j'apprécie, à savoir les réseaux informatiques, mais également parce que je trouve que Cisco Packet Tracer est un excellent outil pour s'approprier les concepts théoriques de la matière.

## Ressources

* Une [copie du rapport détaillé](/assets/files/rapport-simulation-reseaux.pdf) de ce travail
* Le [fichier *.pka*](/assets/files/simulation-reseaux.pka) qui permet d'exécuter la simulation dans Cisco Packet Tracer.
