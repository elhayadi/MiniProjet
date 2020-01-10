const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etudiant = new Schema({
      email:{
         type: String,
        required: true
      },
      password:{
        type: String,
       required: true
     }
});

const Etudiant = mongoose.model('etudiant', etudiant);
module.exports = Etudiant;