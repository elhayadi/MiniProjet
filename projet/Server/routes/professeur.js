
const router = require('express').Router();
let Note = require('../models/note');
let Absence = require('../models/absence');
let Professor = require('../models/professeur')
//*********************************Note************************************** */
router.route('/note').get((req, res) => {
    Note.find()
        .then(Notes => res.json(Notes))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/note/add').post((req, res) => {
    const cne = req.body.cne;
    const matiere = req.body.matiere;
    const note1 = req.body.note1;
    const note2 = req.body.note2;
    const newNote = new Note({
        cne: cne,
        matiere: matiere,
        note1: note1,
        note2: note2
    });
    console.log(newNote)
    newNote.save()
        .then(() => res.json({ msg: 'Note added!' }))
        .catch(err => res.status(400).json({ msg: 'Error !!!' }));
});


/**************************ABSNECES*********************/
router.route('/absence').get((req, res) => {
    Absence.find()
        .then(Absence => res.json(Absence))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/absence/add').post((req, res) => {
    const cne = req.body.cne;
    const matiere = req.body.matiere;
    const date = req.body.date;
    const heure = req.body.heure;
    const absence = req.body.absence;


    const newAbsence = new Absence({

        matiere: matiere,
        date: date,
        heure: heure,
        absence: [{
            "cne": absence
        }]
    }); console.log(newAbsence);
    newAbsence.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});
//********************************Login******************************************* */
router.route('/Login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password

    const newProfessor = {
        email: email,
        password: password
    }
    Professor.findOne(newProfessor)
        .then(User => res.json({ id: User._id, Login: true }))
        .catch(err => res.json({ Login: false }));
});
module.exports = router;