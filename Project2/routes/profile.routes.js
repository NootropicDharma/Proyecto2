
const isLoggedIn = require('../middleware/isLoggedIn');
const Event = require('../models/evento.model');

const router = require('express').Router();

router.get('/profile', isLoggedIn, (req, res)=>{

        res.render('profile/userProfile')

})

module.exports = router;




