const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reclamation = new Schema({
    idEtudiant: { type: Number, required: true },
    reclamation: { type: String, required: true }
});

const Reclamation = mongoose.model('reclamation', reclamation);
module.exports = Reclamation;