<<<<<<< HEAD
=======

const isLoggedIn = require('../middleware/isLoggedIn');
>>>>>>> 63919f506f9c66e5a4080bbbd8b058056c7871a5
const Event = require('../models/evento.model');
const User = require('../models/User.model')
const router = require('express').Router();

router.get('/profile', isLoggedIn, (req, res)=>{

        res.render('profile/userProfile')

})

// router.get('/profile', (req, res)=>{
//         User.find({req.session.})
//         .then()
//         const {name, email , Avatar, username} = req.body  
        
// })



// router.get("/profile", (req, res) => {
//         Event.find()
//         .then(data => {
//                 res.render("list of events", {data})
//         })
//         .catch(console.log)
// })



module.exports = router;




