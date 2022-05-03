const router = require("express").Router();
const Evento = require("../models/evento.model")

router.get('/events', (req, res)=>{
    Evento.find()
    .then(events=>{
        console.log(events)
        res.render("events/events",{events})
    })
    .catch(console.log())
    
})





module.exports = router;
