

# Projet : Mongoose & NodeJS avec MongoDB

Ce projet utilise **Node.js**, **Express**, **Mongoose** et **MongoDB** pour manipuler une base de données MongoDB Atlas. Vous pouvez créer, modifier, rechercher et supprimer des documents en utilisant Mongoose et ses méthodes.

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) pour héberger la base de données (ou MongoDB local si vous préférez)

### Installation

1. Clonez le projet dans votre dossier local :

```bash
git clone ttps://github.com/RadjiMohamedSalim013/Mongoose-Node.js.git
cd Mongoose-Node.js
```

2. Installez les dépendances avec npm :

```bash
npm install
```

3. Créez un fichier `.env` à la racine de votre projet et ajoutez l'URI de votre base de données MongoDB Atlas :

```bash
MONGO_URI=your_mongo_uri_here
```

4. Lancez le serveur Node.js :

```bash
npm start
```

### Fonctionnalités

Le projet offre plusieurs fonctionnalités pour interagir avec la base de données :

#### 1. **Création d'une personne**

Créez une nouvelle personne avec un nom, un âge et des aliments préférés.

#### 2. **Création de plusieurs personnes**

Ajoutez plusieurs personnes en une seule opération avec `Model.create()`.

#### 3. **Recherche de personnes par nom**

Recherchez toutes les personnes ayant un nom donné.

#### 4. **Recherche d'une personne par aliment favori**

Trouvez une personne qui a un aliment spécifique dans ses favoris avec `Model.findOne()`.

#### 5. **Recherche par ID**

Trouvez une personne par son `_id` avec `Model.findById()`.

#### 6. **Modification d'une personne**

Ajoutez un aliment à la liste des aliments favoris d'une personne et sauvegardez-la.

#### 7. **Mise à jour de l'âge avec `findOneAndUpdate()`**

Mettez à jour l'âge d'une personne en utilisant `findOneAndUpdate()`.

#### 8. **Suppression d'une personne par ID**

Supprimez une personne par son `_id` avec `findByIdAndRemove()`.

#### 9. **Suppression de plusieurs personnes**

Supprimez toutes les personnes avec un certain nom grâce à `deleteMany()`.

#### 10. **Requêtes enchaînées**

Filtrez, triez, limitez et sélectionnez certains champs à l'aide de méthodes enchaînées comme `find()`, `sort()`, `limit()`, et `select()`.

### Structure du projet

- `app.js`: Le fichier principal de l'application qui contient la logique de connexion à la base de données et les opérations CRUD.
- `models/person.js`: Le modèle Mongoose pour les documents de personnes.
- `.env`: Le fichier contenant l'URI de votre base de données MongoDB.

---


## 📄 Résumé PDF

[📥 Télécharger le résumé du projet Mongoose & Node.js (PDF)](./Docs/Mongoose&Node.pdf)
