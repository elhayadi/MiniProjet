const router = require('express').Router();
let Note = require('../models/note');
let Etudiant = require('../models/etudiant');
let Absence = require('../models/absence');

let Reclamation = require('../models/reclamation');

//*********************************Note************************************** */
router.route('/note').get((req, res) => {
    Note.find()
        .then(Notes => res.json(Notes))
        .catch(err => res.status(400).json('Error: ' + err));
});


/*********************ABSENCES*************** */
router.route('/absence').get((req, res) => {
    Absence.find()
        .then(Absence => res.json(Absence))
        .catch(err => res.status(400).json('Error: ' + err));
});
/**************************Reclamation*********************/

router.route('/reclamation/add/').post((req, res) => {
    const cne = req.body.cne;
    const reclamation = req.body.reclamation;

    const newReclamation = new Reclamation({

        cne: cne,
        reclamation: reclamation
    }); console.log(newReclamation);
    newReclamation.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});


module.exports = router;