const { post } = require('spotify-web-api-node/src/http-manager');
const Event = require('../models/evento.model');

const router = require('express').Router();

router.get('/profile', (req, res)=>{

        res.render('../views/profile/userProfile.hbs')

})

module.exports = router;




