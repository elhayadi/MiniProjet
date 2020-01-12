const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etudiant = new Schema({
  cne: {
    type: String,
    required: true
  },
  cin: {
    type: String,
    required: true
  },
  nomComplet: {
    type: String,
    required: true
  },

  filiere: {
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

const Etudiant = mongoose.model('Etudiant', etudiant);
module.exports = Etudiant;