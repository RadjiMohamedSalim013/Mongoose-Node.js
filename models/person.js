const mongoose = require('mongoose'); // Import mongoose

//Définition du schéma "personSchema"  avec ses propriétés
const personSchema = new mongoose.Schema({
    name :{
        type: String,  //le nom est une chaîne de caractères
        required: true, // le nom est obligatoire(pas de personne sans nom)
    },
    age : Number,  //l'âge est un nombre
    favoriteFooods : [String], // un tableau de chaînes de caractères p

})



//Création du modèle "Person" à partir du schéma "personSchema"
const Person = mongoose.model('Person', personSchema);


//Exportation du modèle "Person" pour l'utiliser partout dans le projet
module.exports = Person; 