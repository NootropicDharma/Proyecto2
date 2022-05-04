const isLoggedIn = require('../middleware/isLoggedIn');

const Event = require('../models/evento.model');
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
        User.find({username})
        .then(user=>{
                res.render('profile/userProfile', user[0])
                console.log(user)

        })
        .catch(console.log())
})

router.post("/", (req, res) => {
                User.create(req.body)
                .then(fotos => {
                        console.log("nuevafoto", fotos)
                        res.send(data)
                })
                .catch(console.log)
        });






// router.get("/profile", (req, res) => {
//         Event.find()
//         .then(eventos => {
//                 res.render("list of events", {eventos})
//         })
//         .catch(console.log)
// })



module.exports = router;





