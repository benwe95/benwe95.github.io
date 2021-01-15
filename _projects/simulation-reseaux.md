---
title: Simulation réseaux
overview: Un projet qui consiste à simuler un réseau d'entreprise au moyen du logiciel Cisco Packet Tracer.
tags: [réseaux, cisco packet tracer]
order: 1
---

# Contexte
L'objectif de ce travail était de simuler un réseau d'entreprise au moyen du logiciel Cisco Packet Tracer. Plusieurs contraintes, listées ci-dessous, ont dû être respectées afin de coller le plus possible à la réalité du terrain. De plus, toutes les configurations des machines simulées (routeurs, serveurs, switchs, ...) ont été faites via l'invite de commandes.

# Description

<img alt="vue d'ensemble" src="/assets/images/simulation-reseaux.png" class="project-image"/>
[Agrandir l'image](/assets/images/simulation-reseaux.png)

L'image ci-dessus est une vue d'ensemble du réseau qui a été construit. On y retrouve entre autres, les deux réseaux privés de l'entreprise (ECAM et ICHEC), un réseau privé d'une personne malveillante, des réseaux intermédiaires pour représenter Internet.

Ce projet a permis de mettre en pratique les connaissances théoriques du cours de réseaux, en allant plus loin dans les configurations techniques (*router on Switch, protocole OSPF, DMZ, ...*). Les éléments suivants ont été implémentés:

* Un **réseau privé** ECAM avec des sous-réseaux pour séparer les étudiants et l’administration
* Implémentation des sous-réseaux au moyen de **VLANs**
* Un réseau ICHEC capable d’atteindre un serveur privé sur le réseau ECAM
* Implémentation d’un **service DHCP** pour l’attribution des adresses IP privées du réseau ECAM
* Implémentation d’une translation **NAT** pour communiquer avec le réseau public
* Configuration d'un **firewall** pour contrôler le traffic vers le réseau ECAM
* Utilisation du protocole **OSPF** pour le réseau public reliant les deux sites privés
* Configuration d'un **serveur web** accessible sur le réseau public depuis une adresse statique et depuis son url via un **serveur DNS**
* Un **tunnel VPN** pour relier les réseaux ECAM et ICHEC de façon sécurisée
* Une **DMZ** (*DeMilitarized Zone*) pour améliorer la gestion des contrôles d’accès au réseau ECAM

# Avis personnel

J'ai particulièrement apprécié ce travail d'une part parce qu'il s'agit d'un domaine que j'aime, à savoir les réseaux informatiques, mais également parce que je trouve que Cisco Packet Tracer est un excellent outil pour s'approprier les concepts théoriques de la matière.

En plus de la mise en place et de la configuration des différents éléments du réseau, la possibilité de faire des simulations en temps réel (en envoyant un paquet depuis un émetteur vers un destinataire) et l'inspection du contenu des paquets permettent de visualiser concrètement le comportement du réseau.

# Ressources

* Une [copie du rapport détaillé](/assets/files/rapport-simulation-reseaux.pdf) (25p) de ce travail
* Le [fichier *.pka*](/assets/files/simulation-reseaux.pka) qui permet d'exécuter la simulation dans Cisco Packet Tracer.
