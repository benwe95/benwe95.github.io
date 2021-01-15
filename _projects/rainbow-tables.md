---
title: Rainbow tables
overview: Description de l'usage et du fonctionnement des rainbow tables, un compromis entre attaque par dictionnaire et attaque par brute force.
tags: [sécurité, cryptographie]
order: 3
---

# Contexte 

Dans le cadre d'un cours lié à l'algorithmique et à la sécurité informatique, j'ai choisi de rédiger un article sur le fonctionnement et l'utilisation des *rainbow tables*, ainsi qu'une mise en situation pratique.

Dans un premier temps, cet article fait le lien avec des concepts abordés dans le cours, tels que la triade CIA (*Confidentiality, Integrity, Authenticithy*) et les attaques par brute force. 

Les fonctions de hachage (*hash function*) sont ensuite expliquées, ainsi que le chiffrement MD5 qui a été utilisé pour une petite mise en situation.

Finalement, les *rainbow tables* sont détaillées et ainsi que la mise en pratique qui a été effectuée.

# Article

## Liens avec le cours de sécurité informatique

### La triade CIA

Les [empreintes numériques \(_hash_\)](#les-fonctions-de-hachage) sont un élément crucial dans la sécurité informatique car elle permettent de vérifier l'**Intégrité** d'un contenu.

Que ce soit par exemple dans un but d'authentification auprès d'un système ou pour s'assurer qu'un fichier téléchargé n'a pas été corrompu, ces empreintes sont importantes pour **contrôler l'information.**

Dans le premier cas, cela permettra de stocker le *hash* d'un mot de passe en base de données au lieu du mot de passe lui même en clair. Ceci est important en cas de violation de la **Confidentialité** du système, par exemple si un attaquant parvient à s'introduire sur le système et a récupérer les mots de passe des utilisateurs.

Dans le second cas, l'utilisation d'une fonction de hachage permet de vérifier qu'un contenu n'a pas été modifié par un utilisateur malveillant. Une bonne pratique lorsqu'on télécharge un contenu, par exemple, consiste à confronter le *hash* attendu et qui est renseigné par le site, avec le *hash* que l'on recalcul après téléchargement. Si ceux-ci sont identiques alors on peut être sûr qu'il s'agit bien du contenu que le site propose. Dans le cas contraire, il y a une corruption.

REM: il est à noter que l'intégrité n'assurance pas la confiance à la source du contenu. Pour cela, le concept de signature électronique peut-être utilisé.

### Les attaques par brute force

Comme nous l'avons vu, les attaques par brute force sont extrêments gourmandes en terme de ressources de calcul. En effet, puisqu'il s'agit de recalculer pour chaque possibilité de l'espace clé son empreinte numérique au moyen d'une fonction de hashage, on comprend que cela consomme du temps et de l'énergie.

On a vu également que pour améliorer le succès de l'attaque, il est important d'**augmenter la taille de l'espace clé**. Que ce soit en brute force, en ajoutant de nouvelles règles, filtres, ..., ou via des dictionnaires les plus complets possible, il faut que le nombre de candidats soit le plus élevés possible pour avoir plus de chance d'aboutir. Ceci implique donc d'augmenter les ressources de calcul et le temps pour la brute force, et l'espace de stockage pour les dictionnaires.

Les rainbow tables sont un compromis temps-mémoire qui est intéressant à utiliser. 

## Les fonctions de hachage 

### Définition 

Une fonction de hachage est une fonction qui transforme, par une série d’opérations mathématiques, son entrée en une empreinte digitale unique, le *hash* . Ce *hash*  est un condensé des données : il est de taille fixe et tel qu’il soit difficile de déterminer l’entrée intiale à partir de ce *hash* \[1\].

Une telle fonction est donc surjective, puisqu’à une entrée correspond toujours une et une seule empreinte possible et que tout *hash* est le condensé d’au moins un élément de départ mais que plusieurs entrées peuvent aboutir au même *hash*, ce qui peut poser des problèmes de collisions comme nous le verrons plus tard. 

Dans le domaine de la sécurité informatique, on parle de fonctions de hachage cryptographiques, lorsque celles-ci permettent également de résister à des attaques mathématiques ciblées ou autres codes malveillants.

### Utilité 

Les fonctions de hachage peuvent-être utilisées à différentes fins, notamment pour:

* **Réduire la taille d’un ensemble de données** : le condensé est ensuite traîté par une fonction de chiffrement.
* **Stocker des mots de passe** : la plupart des sites impliquant un mot de passe (MDP) pour l’utilisateur ne stockent pas le MDP en clair dans leur base de données mais bien un *hash* de celui-ci. Lorsque l'utilisateur se re-connecte au site, celui-ci calcule le *hash* du mot de passe envoyé et le compare avec l'empreinte sauvée dans la base de données pour vérifier l'égalité.
* **Authentifier** : afin de certifier qu’un fichier n’a pas été corrompu, on peut lui associer un *hash* qui est obtenu à partir de son contenu. Dès lors, si le contenu vient à être modifié, le *hash* généré est différent de l’original ce qui peut-être vérifié par simple comparaison.

### Problèmes 

L’un des grands problèmes des fonctions de hachage est le concept de **collisions.** Une collision a lieu lorsque deux entrées différentes engendrent le même *hash* une fois qu’elles sont transformées par la fonction. Dès lors, dans le cas d’un mot de passe par exemple, ce n’est plus ce mot de passe en question qui est intéressant et recherché par des attaquants mais bien une séquence de caractères qui aboutit au même *hash*.

Ce concept de collisions est inévitable puisque le condensé est stocké sur n bits \(n dépendant de l’algorithme\), ce qui permet de générer au plus 2^n *hashs* différents. Or, l’espace des textes d’entrées est quant à lui théoriquement infini, ce qui implique bien que deux entrées peuvent produire le même résultat et donc une perte d’unicité pour une telle fonction \[2\].

### Casser une fonction

Plusieurs techniques existent afin de casser une telle fonction de hachage. Voyons ici trois méthodes communes : 

1. Recherche d’une entrée possible à partir de l’empreinte, on parle d’attaque sur la première préimage 
2.  Construire des données qui donnent la même empreinte qu’un autre message, on parle ici d’attaque sur la seconde préimage.
3.  Recherche de collision

Attaques par **brute-force** testent toutes les combinaisons possibles jusqu’à obtenir la bonne mais elles n’ont pas de données précalculées -&gt; prennent plus de temps mais consomment moins d’espace car si la séquence testée n’est pas la bonne alors elle n’est pas stockée. 

Attaques de types **dictionnaires** utilisent des couples "donnée-empreinte" précalculés -&gt; cela permet de gagner du temps mais nécessite une grande quantité d’espace de stockage en fonction du nombre de mots que l’on précalcule \(ce qui joue sur la fiabilité du dictionnaire\) 

Attaques par **rainbow tables** sont un compromis temps-mémoire.

### MD5 

MD5 est une fonction de hachage cryptographique, inventée en 1991, qui produit des condensés de 128bits codés en hexadécimal \(Rem : cette fonction de hachage ne permet pas le chiffrement des données, seulement leur compression en un *hash*.\) 

Son fonctionnement se base sur une découpe du message en blocs de 512 bits \(avec un mécanisme de padding si nécessaire, pour atteindre la bonne taille\) qui seront compressés séquentiellement par une fonction mathématique qui utilise également un vecteur de 128bits. 

Chaque séquence comprimée aboutit elle-même à un vecteur 128 bits qui est utilisé pour comprimer le bloc suivant. De plus, un tel vecteur ne peut pas être inversé, autrement dit on ne peut pas retomber sur le blocs d’origine de 512 bits.

Au final, l’empreinte du message est la sortie du dernier bloc comprimé.

La fonction qui permet la compression du bloc de 512 bits comprend quatre étapes. Chacune est elle-même divisée en 16 opérations qui sont des algorithmes travaillant sur des sous-blocs de 32 bits, en effectuant des opérations logiques \(XOR, AND, OR et NOT\) entre ceux-ci. 

Il est à noter que depuis 2004 son fonctionnement a été "cassé" et la fonction MD5 n’est donc plus considérée comme sûre. En effet, des chercheurs on démontré qu’il était possible de trouver une collision sans même passer par une attaque de brute force. 

Toutefois, le processus ne permet pas d’obtenir une signature en particulier et l’utilisation de MD5 est donc encore courante pour prouver l’authenticité d’un document téléchargé \(puisqu’il serait dans ce cas pratiquement impossible de falsifier le document tout en obtenant le même hach\)

## Les rainbow tables 

Les attaques de type dictionnaire utilisent des bases de données qui sont des tables de couples : `< message - *hash* >` 

Pour retrouver la valeur intiale de l’empreinte, on effectue alors une recherche \(intelligente ou non\) parmi tous les *hashs* de la table dans l’espoir d’y trouver le candidat. 

L’inconvénient de tels dictionnaires est qu’ils doivent contenir un nombre important de ces couples pour augmenter les chances de réussite de l’attaque et de ce fait, ils prennent énormément de place à stocker. 

Ceci pose un problème tant au niveau du support de stockage que du temps nécessaire pour les parcourir. 

_Rem : comme discuté plus haut, il existe dans le cas de MD5 2^128 = 3.4\*10^38 possibilités d’empreintes. Il n’est évidemment pas envisageable de toutes les stocker en brut et les dictionnaires privilégient donc des combinaisons usuelles de caractères \(des mots qui ont une signification, des substitutions numériques classiques,...\) ou toutes les combinaisons possibles de x caractères, par exemple. Le contenu de ces dictionnaires n’est donc pas aléatoire, d’où l’intérêt de choisir des symboles moins courant pour constituer son mot de passe._

### Constitution 

Dans le cas d’une rainbow table, on stocke uniquement des couples message-*hash*, qui correspondent respectivement au premier et au dernier maillon d’une chaîne de plusieurs millions de séquences. \[4\] 

Deux fonctions sont utilisées pour constituer de telles chaînes : 

1.  la **fonction de hachage** dont il est question et qui permet de transformer le message en un hach
2. une **fonction de réduction** qui transforme un *hash* en un nouveau message Rem : de telles fonctions produisent toujours le même résultat pour une entrée donnée.

![Consitution d'une chaîne de rainbow tables](/assets/images/rainbow-tables.png)

Ainsi, à partir du premier élément de la chaîne, n’importe quel maillon intermédiaire peut être recalculé jusqu’au dernier. 

Cela permet donc de réduire la taille des tables \(bien que celles-ci peuvent toujours occuper jusqu’à plusieurs centaines de GB\) tout en conservant un grand nombre de possibilités. 

Cependant, il ne s’agit plus d’effectuer une "simple" recherche du *hash* dans la table car il sera nécessaire d’effectuer des opérations de hachage et de réduction, ce qui consomme donc un temps non négligeable.

### Utilisation 

Il s’agira toujours de comparer un *hash* avec les *hashs* de fin de chaînes, stockés dans la rainbow table. 

1.  Si la comparaison est validée alors, on repart du _message_ \(le premier maillon de la chaîne\) et on lui applique successivement les fonctions de réduction et de hachage, un certains nombre de fois jusqu’à obtenir le maillon précédent le *hash* recherché. 
2. Le cas échéant, on applique une fois la fonction de réduction puis celle de hachage, pour obtenir un *hash* qui sera le nouveau candidat à comparer et ainsi de suite.

### Problématique 

La fonction de réduction peut aboutir à des collisions. Dès lors, des parties de chaînes seront dupliquées inutilement \(puisqu’à partir d’une collision, toute la suite de la chaîne serait identique\). 

Pour remédier à cela, il existe des techniques particulières qui consistent à utiliser plusieurs fonctions de réduction différentes, pour réduire le risque de collisions. Ainsi, si deux messages identiques sont obtenus par réduction mais qu’ils le sont à des étapes différentes de la chaîne, alors ils seront ensuite réduits par des fonctions différentes et la suite ne sera donc pas dupliquée.

## Définition du projet 

Dans le cadre de ce travail d’algorithme et d’optimisation, j’ai choisi de faire un projet de type password cracking. L’objectif de celui-ci est d’implémenter un algorithme permettant de retrouver un mot de passe à partir de son empreinte, issue d’une fonction de hachage. 

_Rem : comme nous l’avons vu lorsqu’il était question des collisions, il n’est pas nécessaire de trouver l’entrée exacte de départ mais bien une séquence de caractères qui aboutit au même hach._ 

L’alogrithme se concentrera sur la recherche dans la table afin d’optimiser un compromis tempsmémoire. 

Pour ce faire, je commencerai mon étude en me concentrant sur des mots de passes de 6 caractères alphanumériques seulement et j’utiliserai dans premier temps un simple dictionnaire contenant l’ensemble des combinaisons possibles \(soit 36^6 couples  pour des minuscules uniquement\). Dans un second temps, j’aurai recours aux rainbow tables pour effectuer le même travail, tout en augmentant la complexité des mots de passe à trouver.

Plusieurs mises en situation seront effectuées pour évaluer son efficacité : 

*  changement de rainbow table 
*  mdp de taille variable avec des caractères de plus en plus "complexes"

### Les hypothèses 

Pour ce projet, je me limiterai à l’étude de la fonction de hachage MD5, telle que présentée ci-dessus. 

De plus, pour des questions de droits et d’espace de stockage, j’utiliserai uniquement des tables open sources d’une taille raisonnable, ce qui impactera forcément négativement les chances de réussite de l’algo.

### Les données utilisées 

Les inputs utilisés seront les signatures md5 de mots de passes "quelconques". 

Ces séquences contiendront dans un premier temps uniquement des caractères alphanumériques et des mots issus de la langue anglaise, ce qui sera plus suceptible d’être trouvé dans une des tables utilisées. La difficulté augmentera ensuite en ajoutant des caractères spéciaux et des mots étrangers pour évaluer le temps nécessaire avant d’échouer.

L’output délivré par l’algorithme sera un message qui génère un *hash* identique à celui donné en entrée : soit par collision, soit parce qu’il s’agit bien de la séquence de caractères initiale.

### Mesures 

Une comparaison sera faite entre les deux méthodes étudiées, simple dictionnaire et rainbow tables, afin de prouver l’utilité de ces dernières. Ce qui sera mesuré pour évalué la performance de l’algorithme.  

* le nombre de messages testés avant d’obtenir la solution  
* le temps d’exécution

## Implémentation 

### Génération de la DB d’inputs 

Implémentation d’un script qui génère automatiquement une collection de données tests. Les données consistent ici en des chaînes de caratères alphanumériques générées alétoirement et hachées au moyen de l’algo MD5. Celles-ci seront simplement enregistrées sous forme de fichier texte avec pour chaque mot sa correspondance chirffrée.

Dans la séquence d’échantillons, on veillera également à mettre des mots anglais qui ont une signification pour observer l’impact sur le taux de réussite de l’attaque.

### Génération des tables 

#### Simple dictionnaire 

Un simple dictionnaire, enregistré en fichier texte, qui reprend toutes les combinaisons possibles sur base des caractères suivants : \[a-z ; 0-9\] 

#### Rainbow table 

Une petite rainbow table sera constituée sur base des mêmes caractères \[a-z : 0-9\], le but principal étant de diminuer la taille du fichier dictionnaire et d’en observer l’impact sur le temps de la recherche.

### Pour aller plus loin 

Le présent projet est un exemple de ce qu’il est possible de réaliser au moyen de rainbow tables pour craquer un mot de passe. Dans les conditions "réelles" et pour augmenter considérablement le taux de réussite de l’attaque, il faut évidemment utiliser les tables existantes faisant plusieurs centaines de GB et reprenant donc beaucoup plus de possibilités. De plus, pour améliorer les performances de l’algorithme, on peut envisager de paralléliser celui-ci sur une même table ou sur plusieurs en même temps. Une autre façon serait d’effectuer le traitement au moyen d’un processeur graphique \(calcul vectoriel\).

## Références

\[1\] Les fonctions des hachage cryptographiques. [https://fr.wikibooks.org/...](https://fr.wikibooks.org/w/index.php?%20title=Les\_fonctions\_de\_hachage\_cryptographiques&oldid=582828). 

\[2\] Sécurité Info. Les fonctoins de hachage. [https://www.securiteinfo.com/cryptographie/hash](https://www.securiteinfo.com/cryptographie/hash). shtml, Novembre 2001.

\[3\] Fonction de hachage md5. [https://fr.wikipedia.org/wiki/MD5](https://fr.wikipedia.org/wiki/MD5). 

\[4\] Alain Schneider. Rainbow tables probabilistes. Groupe Lexsi.

\[5\] Mieux Coder : Réflexions sur le développement logiciel. Rainbow tables. [http://mieuxcoder.com/](http://mieuxcoder.com/2008/01/02/rainbow-tables/).
