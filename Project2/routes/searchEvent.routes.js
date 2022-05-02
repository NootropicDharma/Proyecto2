const router = require("express").Router();
const Events = require('../models/evento.model')


router.get('/searchEvent', (req, res)=>{
    res.render('profile/search.event.hbs')
})

router.get("/searchEvent", (req, res) => {
    Events.find()
        .then(eventitos => {
            res.render("list of events", {eventitos})
        })
        .catch(console.log)
})


module.expert




















module.exports = router;