const router = require("express").Router();
//const Events = require('../models/evento.model')

router.get('/profile/createEvent', (req,res)=>{
    res.render('profile/createEvent')
})





// router.post("/createEvent", (req, res) => {
//     Events.create(req.body)
//         .then(eventos => {
//             console.log("CrearEvento", eventos)
//             res.send(data)
//         })
//         .catch(console.log)
// })




module.exports = router;
