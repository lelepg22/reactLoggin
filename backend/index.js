const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');


mongoose.connect('mongodb+srv://invite:invite@cluster0.hb5aq.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');    
    next();
  });
  app.use(bodyParser.json())
  
  app.use('/api/auth', userRoutes);
  app.listen(3001, () =>{
    console.log("Ecoute sur le port 3001")  
  })
  

  module.exports = app;