const isLoggedIn = require('../middleware/isLoggedIn');

const Event = require('../models/evento.model');

const User = require('../models/User.model');
const EventosCreados = require("../models/createdEvents");
const router = require('express').Router();

router.get('/', isLoggedIn, (req, res)=>{
        const {name,email,username, Avatar}   = req.session.user
        EventosCreados.find({"participants.Usuario":"Alejandro"})
        .then(myEvents=>{
                const user = {name,email,username,Avatar,myEvents}
                res.render('profile/userProfile', user)
        })
        .catch(console.log())
  

const User = require('../models/User.model')
const router = require('express').Router();

router.get('/', isLoggedIn, (req, res)=>{
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





