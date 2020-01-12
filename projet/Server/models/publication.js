const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publication = new Schema({
    Title: {
        type: String,
        required: true
    },
    Body: {
        type: String,
        required: true
    },
    Url: {
        type: String
    }
});

const Publication = mongoose.model('Publication', publication);
module.exports = Publication;