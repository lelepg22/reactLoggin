const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

exports.headers = (req, res, next) => {
  console.log("requete Auth");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
};

exports.signup = (req, res, next) => {
  
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    
   
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            const token = jwt.sign({ userId: user._id}, 
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h'});
            res.status(200).json({
              userId: user._id,
              token: token
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
      
  };
  exports.getAllUsers = (req, res, next) => {     
    User.find().then((response)=> { res.status(200).json(response)
    }).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

