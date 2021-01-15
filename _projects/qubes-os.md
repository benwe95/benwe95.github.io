---
title: Qubes OS
overview: Une présentation du système d'exploitation Qubes OS pour mettre en avant l'utilisation de techniques de virutalisation dans le cadre de la sécurité.
tags: [sécurité, virtualisation, OS]
---


## Contexte

Ce travail a été réalisé dans le cadre d'un cours d'informatique sur la virtualisation. La consigne était d'effectuer une présentation théorique d'une vingtaine de minutes sur un sujet au choix en lien avec des techniques de virtualisation. Mon choix s'est porté sur le projet Qubes qui exploite les concepts de virtualisation dans le cadre de la sécurité d'un système.

## Aperçu

[Qubes OS](https://www.qubes-os.org/) est un système d'exploitation orienté sécurité qui applique le principe de la **sécurité par l'isolement**. Ce principe s'appuie sur l’hypothèse qu’il est impossible d’avoir un système sécurisé à 100% et qu’une attaque aura lieu tôt ou tard. Le but est alors de limiter l'impact de celle-ci en divisant le système en plus petits espaces de travail cloisonnés et moins exposés aux risques, de façon à empêcher la propagation de l'attaque.

Pour ce faire, Qubes OS repose sur l'**hyperviseur Xen** et implémente un mécanisme de machines virtuelles spécifiques pour compartimenter les espaces de travail de l'utilisateur.

## Ressources

* Copie des [slides](/assets/files/qubesOS-slides.pdf)
* Une [transcription écrite](/assets/files/qubesOS-transcription.txt) de la présentation