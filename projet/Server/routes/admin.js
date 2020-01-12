const router = require('express').Router();
let Matiere = require('../models/matiere');
let Filiere = require('../models/filiere');
let Professor = require('../models/professeur');
let Etudiant = require('../models/etudiant');
let Admin = require('../models/admin');
let Publication = require('../models/publication')
//*********************************Filieres************************************** */
router.route('/matiere').get((req, res) => {
    Matiere.find()
        .then(Filieres => res.json(Filieres))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/matiere/update').post((req, res) => {
    Matiere.findById(req.body.id)
        .then(Mat => {
            Mat.Name = req.body.Name;
            Mat.URL = req.body.URL;
            Mat.description = req.body.description;
            Mat.vote = Number(req.body.vote);

            Mat.save()
                .then(() => res.json('Matiere updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/matiere/add').post((req, res) => {
    const Name = req.body.Name;
    const Fil = req.body.Filiere
    const newMatiere = new Matiere({
        Name: Name,
        Filiere: Fil
    });
    newMatiere.save()
        .then(() => res.json({ msg: 'Matiere added!' }))
        .catch(err => res.status(400).json({ msg: 'Error !!!' }));
});

//*********************************Filieres************************************** */
router.route('/filiere').get((req, res) => {
    Filiere.find()
        .then(Filieres => res.json(Filieres))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/filiere/update').post((req, res) => {
    Filiere.findById(req.body.id)
        .then(Fil => {
            Fil.Name = req.body.Name;
            Fil.URL = req.body.URL;
            Fil.description = req.body.description;
            Fil.vote = Number(req.body.vote);

            Fil.save()
                .then(() => res.json('filiere updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/filiere/add').post((req, res) => {
    const Name = req.body.Name;
    console.log(Name)
    console.log("ok")
    const newfiliere = new Filiere({
        Name: Name
    });
    newfiliere.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});

//*********************************Professeur************************************** */
router.route('/Professor/').get((req, res) => {
    Professor.find()
        .then(Professors => res.json(Professors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Professor/update').post((req, res) => {
    Professor.findById(req.body.id)
        .then(Fil => {
            Fil.cin = req.body.cin;
            Fil.nomComplet = req.body.nomComplet;
            Fil.matiere = req.body.matiere;
            Fil.email = Number(req.body.email);
            Fil.password = req.body.password

            Fil.save()
                .then(() => res.json('Professor updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/Professor/add').post((req, res) => {
    const cin = req.body.cin;
    const nomComplet = req.body.nomComplet;
    const matiere = req.body.matiere;
    const email = req.body.email;
    const filiere = req.body.filiere;
    const password = req.body.password
    const newProfessor = new Professor({

        cin: cin,
        nomComplet: nomComplet,
        matiere: matiere,
        filiere: filiere,
        email: email,
        password: password
    });
    newProfessor.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});
//*********************************Filieres************************************** */
router.route('/filiere').get((req, res) => {
    Filiere.find()
        .then(Filieres => res.json(Filieres))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/filiere/update').post((req, res) => {
    Filiere.findById(req.body.id)
        .then(Fil => {
            Fil.Name = req.body.Name;
            Fil.URL = req.body.URL;
            Fil.description = req.body.description;
            Fil.vote = Number(req.body.vote);

            Fil.save()
                .then(() => res.json('filiere updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/filiere/add').post((req, res) => {
    const Name = req.body.Name;
    console.log(Name)
    console.log("ok")
    const newfiliere = new Filiere({
        Name: Name
    });
    newfiliere.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});

//*********************************Etudiant************************************** */
router.route('/Etudiant/').get((req, res) => {
    Etudiant.find()
        .then(Etudiants => res.json(Etudiants))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Etudiant/update').post((req, res) => {
    Etudiant.findById(req.body.id)
        .then(Fil => {
            Fil.cne = req.body.cne;
            Fil.cin = req.body.cin;
            Fil.nomComplet = req.body.nomComplet;
            Fil.filiere = req.body.filiere;
            Fil.email = req.body.email;
            Fil.password = req.body.password

            Fil.save()
                .then(() => res.json('Etudiant updated!'))
                .catch(err => res.status(400).json('Error1: ' + err));
        })
        .catch(err => res.status(400).json('Error2: ' + err));
});

router.route('/Etudiant/add').post((req, res) => {
    const cne = req.body.cne;
    const cin = req.body.cin;
    const nomComplet = req.body.nomComplet;
    const filiere = req.body.filiere;
    const email = req.body.email;
    const password = req.body.password

    const newEtudiant = new Etudiant({
        cne: cne,
        cin: cin,
        nomComplet: nomComplet,
        filiere: filiere,
        email: email,
        password: password
    });
    newEtudiant.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});

//*********************************Admins************************************** */
router.route('/Login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password

    const newAdmin = {
        email: email,
        password: password
    }
    if (email == "admin" && password == "admin") {
        res.json({ Login: true });
    } else {
        Admin.findOne(newAdmin)
            .then(User => res.json({ id: User._id, Login: true }))
            .catch(err => res.json({ Login: false }));
    }

});
router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password

    const newAdmin = new Admin({
        email: email,
        password: password
    });
    newAdmin.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});
//*********************************Publication************************************** */
router.route('/Publication').get((req, res) => {

    Publication.find()
        .then(User => res.json(User))
        .catch(err => res.json(err));
});

router.route('/Publication/add').post((req, res) => {
    const Url = req.body.Url;
    const Body = req.body.Body;
    const Title = req.body.Title;
    const newPub = new Publication({
        Title: Title,
        Body: Body,
        Url: Url
    });
    newPub.save()
        .then(() => res.json({ msg: 'Ajouter avec succès' }))
        .catch(err => res.status(400).json({ msg: 'erreur!!' }));
});

module.exports = router;