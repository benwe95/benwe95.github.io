---
title: Qubes OS
overview: Une présentation du système d'exploitation Qubes OS pour mettre en avant l'utilisation de techniques de virtualisation dans le cadre de la sécurité.
tags: [sécurité, virtualisation, OS]
order: 2
---


## Contexte

Ce travail a été réalisé dans le cadre d'un cours d'informatique sur la virtualisation. La consigne était d'effectuer une présentation théorique d'une vingtaine de minutes sur un sujet au choix en lien avec des techniques de virtualisation. Mon choix s'est porté sur le projet Qubes qui exploite les concepts de virtualisation dans le cadre de la sécurité d'un système.

## Description

[Qubes OS](https://www.qubes-os.org/) est un système d'exploitation orienté sécurité qui applique le principe de la **sécurité par l'isolement**. Ce principe s'appuie sur l’hypothèse qu’il est impossible d’avoir un système sécurisé à 100% et qu’une attaque aura lieu tôt ou tard. Le but est alors de limiter l'impact de celle-ci en divisant le système en plus petits espaces de travail cloisonnés et moins exposés aux risques, de façon à empêcher la propagation de l'attaque.

Pour ce faire, Qubes repose sur l'**hyperviseur Xen** et implémente un mécanisme de machines virtuelles spécifiques (TemplateVMs, DisposableVMs, AppVMs, ServicesVMs, ...) pour compartimenter les espaces de travail de l'utilisateur.

Tout l'intérêt de la virtualisation telle qu'elle est utilisée dans ce cadre, est d'obtenir des **machines virtuelles (VMs)** applicatives légères, les qubes,  dans lesquelles sont exécutés les programmes. Au cas où une VM vient à être compromise par un logiciel malveillant, celui-ci n'a aucun moyen de se propager au reste du système, il restera cloisonné à l'intérieur de cette VM uniquement. Une VM corrompue peut ensuite facilement être détruire et redémarée à partir d'une VM template (pour des informations plus détaillées sur ce fonctionnement, voir la présentation complète disponible dans les [ressources](#ressources) ci-dessous.)

L'utilisateur peut alors compartimenter sa vie digitale en construisant des **domaines de sécurités** qu'il configure pour leur donner plus ou moins de privilèges en fonction des tâches attendue pour chaque domaine (ex: interdire l'accès réseau à un domaine dans lequel l'utilisateur effectue des tâches plus sensibles)

## Avis personnel

J'ai pris beaucoup de plaisir à me plonger dans la documentation de Qubes et à faire les liens entre les aspects de la virtualisation et de la sécurité informatique.

Qubes est un projet remarquable qui vaut la peine de s'attarder à son fonctionnement. Il n'est comparable à aucun autre système d'exploitation.

## Ressources

* Copie des [slides](/assets/files/qubesOS-slides.pdf)
* Une [transcription écrite](/assets/files/qubesOS-transcription.txt) de la présentation entière