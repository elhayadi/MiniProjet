const express = require('express');
const cors = require('cors');
const Mongoose = require('mongoose');




const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/g-este";

Mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const con = Mongoose.connection;
con.once('open', () => {
    console.log("MongoDb database connected successfully");
})

const AdminRouter = require('./routes/admin');
app.use('/admin', AdminRouter);

app.listen(port, () => {
    console.log('running on port:' + port);
})







