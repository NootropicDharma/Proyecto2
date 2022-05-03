const Event = require('../models/evento.model');
const User = require('../models/User.model')
const router = require('express').Router();

router.get('/profile', (req, res)=>{

        res.render('../views/profile/userProfile.hbs')

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




