const mongoose = require('mongoose');
require('dotenv').config();
const Person = require('./models/person'); // Import du modèle Person

//connection à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
})
.then(() => console.log('Connecté a MongoDB !'))
.catch(err => console.log('Erreur de connexion à MongoDB :', err));


// Création d'une nouvelle personne
// const createPerson = async () => {
//   try {
//     const newPerson = new Person({
//       name: 'Alice',
//       age: 28,
//       favoriteFoods: ['Foutou', 'Garba']
//     });

//     const savedPerson = await newPerson.save();
//     console.log(' Personne enregistrée :', savedPerson);
//   } catch (err) {
//     console.error(' Erreur lors de la sauvegarde :', err);
//   }
// };
// createPerson(); //  appelle de la fonction


//creation de plusieur personnes 
// const createManyPeople = async () => {
//   try {
//     const arrayOfPeople = [
//       { name: 'Samira', age: 30, favoriteFoods: ['riz', 'kabato'] },
//       { name: 'Abdoul', age: 25, favoriteFoods: ['Garba', 'riz'] },
//       { name: 'David', age: 40, favoriteFoods: ['tous', 'Garba'] },
//     ];

//     const people = await Person.create(arrayOfPeople);
//     console.log(' Plusieurs personnes ajoutées :', people);
//   } catch (err) {
//     console.error(' Erreur lors de la création en masse :', err);
//   }
// };
// createManyPeople();


// Recherche d'une personne par son nom
// const findPeopleByName = async (name) => {
//   try {
//     const people = await Person.find({ name });
//     console.log(` Personnes trouvées avec le nom "${name}" :`, people);
//   } catch (err) {
//     console.error(' Erreur lors de la recherche :', err);
//   }
// };
// findPeopleByName('Samira'); //  appelle de la fonction


//Trouver une personne avec un alimment favori donnée
// const findOneByFavoriteFood = async (food) => {
//   try {
//     const person = await Person.findOne({ favoriteFoods: food });
//     if (!person) {
//       console.log(` Aucune personne trouvée qui aime "${food}"`);
//       return;
//     }
//     console.log(` Personne trouvée qui aime "${food}" :`, person);
//   } catch (err) {
//     console.error(' Erreur lors de la recherche par aliment :', err);
//   }
// };
// findOneByFavoriteFood('foutou'); 


//Trouver une personne par son id
// const findPersonById = async (personId) => {
//   try {
//     const person = await Person.findById(personId);
//     if (!person) {
//       console.log(` Aucune personne trouvée avec l'ID "${personId}"`);
//       return;
//     }
//     console.log(' Personne trouvée par ID :', person);
//   } catch (err) {
//     console.error(' Erreur lors de la recherche par ID :', err);
//   }
// };

// findPersonById('67f5e257a7b989f4a347a4b5');


// Recherche une personne par son identifiant MongoDB (_id) puis ajouter hamburger a sa liste alimennt favori
// const addFavoriteFood = async (personId) => {
//   try {
//     const person = await Person.findById(personId);
//     console.log(' Personne trouvée :', person);
//     if (!person) {
//       console.log(' Personne non trouvée');
//       return;
//     }

//     // On modifie ses aliments préférés
//     person.favoriteFooods.push('hamburger');

//     // On sauvegarde la version modifiée
//     const updatedPerson = await person.save();
//     console.log(' Personne mise à jour avec hamburger ajouté :', updatedPerson);
//   } catch (err) {
//     console.error(' Erreur lors de la mise à jour :', err);
//   }
// };
// addFavoriteFood('67f5e257a7b989f4a347a4b5');

// Met à jour l'âge d'une personne trouvée par son nom, puis affiche le document mis à jour
// const updateAgeByName = async (personName) => {
//     try {
//       const updatedPerson = await Person.findOneAndUpdate(
//         { name: personName },
//         { age: 20 },
//         { new: true } // renvoyer le document mis à jour
//       );
//         if (!updatedPerson) {
//             console.log(` Aucune personne trouvée avec le nom "${personName}"`);
//             return;
//         }
  
//       console.log(' Personne mise à jour :', updatedPerson);
//     } catch (err) {
//       console.error(' Erreur lors de la mise à jour avec findOneAndUpdate :', err);
//     }
//   }; 
//   updateAgeByName('Samira'); 


// // Supprime une personne de la base grâce à son _id

// const removePersonById = async (personId) => {
//   try {
//     const removedPerson = await Person.findByIdAndDelete(personId);
//     if (!removedPerson) {
//       console.log(` Aucune personne trouvée avec l'ID "${personId}"`);
//       return;
//     }
//     console.log(' Personne supprimée :', removedPerson);
//   } catch (err) {
//     console.error(' Erreur lors de la suppression :', err);
//   }
// };

// removePersonById('67f5e257a7b989f4a347a4b5');

//// Supprime toutes les personnes portant le nom Mary 

// const removeManyPeople = async (name) => {
//   try {
//     const result = await Person.deleteMany({ name });
//     if (!result.deletedCount) {
//       console.log(` Aucune personne trouvée avec le nom "${name}"`);
//       return;
//     }
//     console.log(` ${result.deletedCount} personnes supprimées avec le nom "${name}"`);
//   } catch (err) {
//     console.error(' Erreur lors de la suppression en masse :', err);
//   }
// };

//removeManyPeople('Mary'); 

//Trouvez des personnes qui aiment les burritos. Triez-les par nom, limitez les résultats à deux documents et masquez leur âge

const findPeopleWhoLikeBurritos = async () => {
  try {
    const people = await Person.find({ favoriteFoods: 'burritos' })
      .sort({ name: 1 })        // Trie par nom croissant
      .limit(2)                 // Limite à 2 résultats
      .select('name favoriteFoods')  // Ne garde que name et favoriteFoods
      .exec();
    if (people.length === 0) {
      console.log(' Aucune personne trouvée qui aime les burritos');
      return;
    }
    console.log(' Personnes qui aiment les burritos :', people);
  } catch (err) {
    console.error(' Erreur lors de la recherche enchaînée :', err);
  }
};

findPeopleWhoLikeBurritos();
