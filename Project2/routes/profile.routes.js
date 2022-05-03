const isLoggedIn = require('../middleware/isLoggedIn');

const Event = require('../models/evento.model');
const User = require('../models/User.model')
const router = require('express').Router();

router.get('/profile', isLoggedIn, (req, res)=>{
        console.log(req.session.user)
        const {name,email,username, favoritePlace, myEvents, Avatar}   = req.session.user
        const user = {
                name,
                email,
                username,
                favoritePlace,
                myEvents,
                Avatar
                }
        res.render('profile/userProfile', user)
})







// router.get("/profile", (req, res) => {
//         Event.find()
//         .then(eventos => {
//                 res.render("list of events", {eventos})
//         })
//         .catch(console.log)
// })



module.exports = router;





