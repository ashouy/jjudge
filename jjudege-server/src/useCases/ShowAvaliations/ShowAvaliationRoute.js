const express = require('express')
const { getAvaliations } = require('./ShowAvaliationPersistence')
const router = express.Router()
const { verifyToken } = require('../verifyJWT')
const { saveLog } = require('../Logs/Logs')


router.get('/:userId', verifyToken, async (req, res) => {
    try {
        res.send(await getAvaliations(req.params.userId))
        saveLog('/showAvaliations')
    } catch (error) {
        console.log(error)
        res.status(400).send("can't find")
    }

})

module.exports = router