---
title: Une base de données simplifiée pour Apple Shortcuts
date: 2023-04-10
author: Ben
layout: layout_post
tags:
  - Apple
  - Tech
---

<p class="p3"><img src="{{ "assets/img/SimpleDatabase.jpg" | relative_url }}" alt="SimpleDatabase.jpg"></p>
<p class="p4"><br></p>
<p class="p2">Dans cet article, nous allons explorer une technique simple pour créer une base de données partagée entre différents appareils Apple, en utilisant Apple Shortcuts et iCloud. Cette méthode est idéale pour transférer et traiter des données provenant d'applications telles qu'Apple Health, qui ne sont disponibles que sur iPhone, et les utiliser sur un Mac ou un iPad.</p>
<p class="p4"><br></p>
<p class="p2">Étape 1 : Créer un dossier "base de données" sur iCloud</p>
<p class="p4"><br></p>
<p class="p2">Pour commencer, créez un nouveau dossier sur iCloud que vous nommerez "base de données". Ce dossier sera accessible par tous les appareils connectés à votre compte Apple, vous permettant ainsi de partager facilement des données entre eux.</p>
<p class="p4"><br></p>
<p class="p2">Étape 2 : Créer un raccourci pour enregistrer les données</p>
<p class="p4"><br></p>
<p class="p2">Sur votre iPhone, ouvrez l'application Raccourcis et créez un nouveau raccourci. Ce raccourci devra être configuré pour récupérer les données souhaitées depuis Apple Health (ou toute autre source de données) et les enregistrer dans un fichier spécifique situé dans le dossier "base de données" sur iCloud. N'oubliez pas de définir une action pour écraser le fichier existant afin de mettre à jour les données.</p>
<p class="p4"><br></p>
<p class="p2">Étape 3 : Créer un raccourci pour lire les données</p>
<p class="p4"><br></p>
<p class="p2">Sur votre Mac ou iPad, créez un autre raccourci qui sera chargé de lire les données stockées dans le fichier créé précédemment. Ce raccourci pourra être configuré pour récupérer le contenu du fichier et l'utiliser dans diverses actions ou applications, en fonction de vos besoins.</p>
<p class="p2">Exemple d'utilisation : Suivi de l'activité physique</p>
<p class="p4"><br></p>
<p class="p2">Imaginons que vous souhaitiez suivre votre activité physique quotidienne et visualiser vos progrès sur votre Mac. Vous pouvez créer un raccourci sur votre iPhone qui récupère vos données d'activité depuis Apple Health, les enregistre dans un fichier texte dans le dossier "base de données" sur iCloud, puis les écrase chaque jour pour mettre à jour les informations.</p>
<p class="p4"><br></p>
<p class="p2">Sur votre Mac, créez un raccourci qui lit le fichier texte et l’affiche dans une notification ou l’utilise dans une autre application. De cette manière, vous pouvez facilement analyser et suivre vos progrès en matière d'activité physique à partir de votre Mac.</p>
<p class="p4"><br></p>
<p class="p2">En utilisant les Raccourcis Apple et iCloud, il est possible de créer une base de données simple et partagée entre différents appareils Apple. Cette technique est particulièrement utile pour ceux qui cherchent à exploiter les données disponibles uniquement sur certaines plateformes, comme Apple Health, et à les utiliser sur d'autres appareils pour une analyse approfondie. N'hésitez pas à expérimenter et à adapter cette méthode à vos propres besoins et projets.</p>


