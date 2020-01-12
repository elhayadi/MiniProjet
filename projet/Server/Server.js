const express = require('express');
const cors = require('cors');
const Mongoose = require('mongoose');




const app = express();
const port = process.env.PORT || 3029;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://elhayadi:elhayadi@cluster0-iuumk.mongodb.net/test?retryWrites=true&w=majority";

Mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const con = Mongoose.connection;
con.once('open', () => {
    console.log("MongoDb database connected successfully");
})

const AdminRouter = require('./routes/admin');
app.use('/admin', AdminRouter);
const ProfessorRouter = require('./routes/professeur');
app.use('/professor', ProfessorRouter);
const EtudiantRouter = require('./routes/etudiant');
app.use('/etudiant', EtudiantRouter);
app.listen(port, () => {
    console.log('running on port:' + port);
})







