const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filiere = new Schema({
    Name: {
        type: String,
        required: true
    }
});

const Filiere = mongoose.model('Filiere', filiere);
module.exports = Filiere;