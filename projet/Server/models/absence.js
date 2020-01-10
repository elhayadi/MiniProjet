const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absence = new Schema({
    idEtudiant: { type: Number, required: true },
    module: { type: String, required: true },
    Date: { type: String, required: true },
    heure: { type: String, required: true}
});

const Absence = mongoose.model('absence', absence);
module.exports = Absence;