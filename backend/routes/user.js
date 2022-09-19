const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.use(userCtrl.headers)
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/users', auth, userCtrl.getAllUsers);


module.exports = router;