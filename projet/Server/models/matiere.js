const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matiere = new Schema({
    Name: {
        type: String,
        required: true
    },
    Filiere: {
        type: String,
        required: true
    }
});

const Matiere = mongoose.model('matiere', matiere);
module.exports = Matiere;