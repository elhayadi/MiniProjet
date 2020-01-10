const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professeur = new Schema({
  cin: {
    type: String,
    required: true
  },
  nomComplet: {
    type: String,
    required: true
  }, filiere: {
    type: String,
    required: true
  },
  matiere: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Professor = mongoose.model('etudiant', professeur);
module.exports = Professor;