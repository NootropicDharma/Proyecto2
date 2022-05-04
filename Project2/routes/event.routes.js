const router = require("express").Router();
const Evento = require("../models/evento.model")

const User = require("../models/User.model")
const EventosCreados = require("../models/createdEvents")
router.get('/events', (req, res)=>{
    Evento.find()
    .then(events=>{


router.get('/events', (req, res)=>{
    Evento.find()
    .then(events=>{
        console.log(events)

        res.render("events/events",{events})
    })
    .catch(console.log())
    
})

router.get('/createEvent/:id', (req,res)=>{
    const idEvento = req.params.id
    Evento.findById(idEvento)
    .then(evento=>{
        res.render('events/createEvent',evento)
    })
    .catch(error=>console.log(error))
    
})

router.post("/createEvent", (req,res)=>{
    const {tittle, date, gasto, nameEvent, eventImg} = req.body
    const {username}= req.session.user
    console.log(username)
    const participants = [
        {
            gasto: gasto,
            Usuario: username
        }
    ]
    const author = username
    const idEvento = Date.now()
    const myEvento = {idEvento,tittle,date,nameEvent,eventImg,participants,author}
    EventosCreados.create(myEvento)
    .then((info)=>{
        res.redirect("/profile")
    })
    .catch(console.log())
})









module.exports = router;
