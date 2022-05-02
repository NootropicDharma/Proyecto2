const router = require("express").Router();
const Events = require('../models/evento.model')








router.get('/createEvent', (req, res)=>{
    res.render('profile/createEvent.hbs')
})



router.post("/createEvent", (req, res) => {
    Events.create(req.body)
        .then(data => {
            console.log("CrearEvento", data)
            res.send(data)
        })
        .catch(console.log)
})




module.exports = router;
