const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const note = new Schema({
    idEtudiant: { type: Number, required: true },
    module: { type: String, required: true },
    note1: { type: Number },
    note2: { type: Number }
});
const Note = mongoose.model('note', note);
module.exports = Note;