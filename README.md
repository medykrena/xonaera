# xonaera
Main website for Xonaera — drone inspection services in Switzerland

# Xonaera

Site vitrine de **Xonaera**, activité indépendante suisse spécialisée dans l’inspection, la thermographie et l’analyse de données captées par drone.

Le site présente les services proposés, permet aux visiteurs de demander un devis ou de prendre contact, et propose un calculateur de prix indicatif.

## Positionnement

Xonaera ne vend pas uniquement des vols de drone.

Le drone constitue principalement un **outil de collecte de données**. La valeur ajoutée repose sur l’exploitation, l’analyse et la restitution des données collectées afin de fournir des informations utiles au client.

## Services

Le site présente actuellement quatre domaines de services :

- **Inspection de toiture**
- **Thermographie de bâtiment**
- **Analyse thermique de panneaux solaires**
- **Mapping et modélisation 3D / photogrammétrie**

Les services sont destinés à une clientèle professionnelle et privée en Suisse, selon les contraintes techniques, réglementaires et opérationnelles applicables à chaque mission.

## Structure du site

Le site est disponible en français et en allemand.

```text
/
├── index.html
├── 404.html
├── README.md
├── NAV.md
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── services.json
│
├── css/
│   └── main.css
│
├── js/
│   └── devis.js
│
├── assets/
│   ├── icons/
│   │   └── favicon.ico
│   └── images/
│       └── og-image.jpg
│
├── fr/
│   ├── index.html
│   ├── services.html
│   ├── inspection-thermique.html
│   ├── mapping-modelisation.html
│   ├── realisations.html
│   ├── academy/
│   ├── a-propos.html
│   ├── devis.html
│   ├── contact.html
│   ├── confidentialite.html
│   ├── mentions-legales.html
│   ├── cgv.html
│   └── blog/
│
└── de/
    ├── index.html
    ├── services.html
    ├── thermografie.html
    ├── mapping-modellierung.html
    ├── referenzen.html
    ├── academy/
    ├── uber-uns.html
    ├── angebot.html
    ├── kontakt.html
    ├── datenschutz.html
    ├── impressum.html
    ├── abg.html
    └── blog/
````

Technologies

Le site utilise une architecture volontairement simple :

HTML
CSS
JavaScript vanilla
JSON
Netlify
GitHub

Il n'utilise pas de framework frontend.

Il n'y a actuellement :

aucune base de données ;
aucune authentification ;
aucun système de paiement ;
aucun backend applicatif ;
aucune Netlify Function ;
aucune dépendance Brevo nécessaire au fonctionnement du site.
Calculateur de prix

Le calculateur de prix de la page Devis utilise :

services.json

Les prix sont calculés selon la formule :

prix indicatif = prix de base + prix par m² × surface

Les données actuellement utilisées sont :

Service	Prix de base	Prix par m²
Inspection de toiture	CHF 390	CHF 0.80
Thermographie de bâtiment	CHF 500	CHF 1.20
Analyse de panneaux solaires	CHF 550	CHF 1.00

Ces montants sont indicatifs et ne constituent pas un devis contractuel.

Le prix final dépend notamment des caractéristiques de la mission, de la surface réelle, des conditions d'accès, des contraintes opérationnelles et des besoins du client.

Toute modification des tarifs doit être effectuée dans :

services.json

Après toute modification, le calculateur doit être vérifié.

Formulaires

Deux formulaires Netlify sont utilisés :

contact
devis

Ils utilisent Netlify Forms et sont configurés avec un honeypot anti-spam.

Les notifications e-mail sont configurées directement dans Netlify et sont envoyées à :

contact@xonaera.ch

Les formulaires ne nécessitent pas de backend personnalisé.

Déploiement

Le dépôt GitHub utilisé pour le site est :

medykrena/xonaera

La branche de production est :

main

Le dépôt est connecté à Netlify pour le déploiement du site.

Domaine de production :

https://xonaera.ch

Site Netlify :

https://xonaera.netlify.app

Toute modification poussée sur main peut déclencher le déploiement correspondant dans Netlify selon la configuration du projet.

SEO et internationalisation

Les versions française et allemande sont maintenues séparément afin de permettre une localisation correcte du contenu.

Les pages principales utilisent :

canonical
hreflang
x-default
Open Graph
sitemap XML
robots.txt

Les liens hreflang doivent toujours pointer vers les véritables fichiers existants dans le dépôt.

Lorsqu'une page est ajoutée, renommée ou supprimée, les éléments suivants doivent être vérifiés :

liens internes ;
URL canonique ;
liens hreflang FR/DE ;
x-default ;
URL Open Graph ;
sitemap ;
liens présents dans le footer ;
éventuels liens depuis NAV.md.
Contenu multilingue

La version française se trouve dans :

/fr/

La version allemande se trouve dans :

/de/

Les deux versions doivent rester cohérentes au niveau de :

structure ;
navigation ;
services ;
informations légales ;
SEO ;
liens entre les langues.

Les noms de fichiers peuvent être localisés lorsque cela a été décidé pour la version allemande.

Exemple :

/fr/a-propos.html
/de/uber-uns.html

Pour les conditions générales :

/fr/cgv.html
/de/abg.html

Ne pas recréer de/agb.html : le fichier allemand actuel est de/abg.html.

Drone Academy

La section Academy constitue un contenu complémentaire destiné notamment à l'information et au référencement.

Elle contient actuellement trois modules :

Comment fonctionne un drone
Drones professionnels et applications
Réglementation suisse et française

Les modules qui ne sont pas encore développés peuvent rester temporairement présentés comme des pages en construction.

La Drone Academy ne doit pas remplacer le positionnement principal de Xonaera en tant que prestataire de services drone.

Blog

Le site contient une section blog en français et en allemand.

Les articles actuellement présents couvrent notamment :

l'inspection de toiture par drone ;
la thermographie de bâtiment par drone.

Lors de l'ajout d'un article :

créer la version française et/ou allemande selon le besoin ;
vérifier les liens internes ;
vérifier canonical et hreflang lorsqu'une version dans l'autre langue existe ;
mettre à jour les index de blog ;
vérifier le footer ;
mettre à jour le sitemap si nécessaire.
Navigation

NAV.md constitue une référence pratique pour la navigation interne du projet.

Lorsqu'une page est renommée ou supprimée, vérifier les liens correspondants dans :

les pages HTML ;
les index ;
les articles ;
les footers ;
NAV.md ;
sitemap.xml.

Ne pas recréer de liens vers d'anciens noms de fichiers.

Maintenance

Avant toute modification importante :

identifier les fichiers concernés ;
vérifier leur état actuel dans le dépôt ;
effectuer uniquement les modifications nécessaires ;
vérifier les liens et dépendances concernés ;
vérifier le rendu ou le comportement correspondant ;
vérifier le déploiement Netlify lorsque la modification est en production.
Règles importantes
Ne pas introduire de framework frontend sans décision explicite.
Ne pas ajouter de backend ou de base de données sans décision explicite.
Ne pas réintroduire les Netlify Functions supprimées.
Ne pas réintroduire une dépendance Brevo sans décision explicite.
Conserver les formulaires Netlify existants.
Conserver la cohérence FR/DE.
Utiliser les chemins réellement présents dans le dépôt.
Vérifier canonical et hreflang lors de toute modification structurelle.
Mettre à jour services.json si les prix du calculateur changent.
Ne pas transformer les prix indicatifs du calculateur en promesse commerciale.
État fonctionnel vérifié

Les éléments suivants ont été vérifiés :

formulaire Devis → soumission Netlify → notification e-mail ;
formulaire Contact → soumission Netlify → notification e-mail ;
calculateur de prix ;
synchronisation calculateur ↔ formulaire Devis ;
chargement de services.json ;
déploiement Netlify ;
absence de Netlify Functions ;
liens internes principaux ;
correspondance FR/DE ;
balises canonical et hreflang des pages principales ;
sitemap ;
favicon ;
image Open Graph ;
pages principales françaises et allemandes.

**Ce README est volontairement documentaire** : il explique l’architecture et les règles de maintenance sans in
