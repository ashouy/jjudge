const express = require('express')
const { getAvaliations } = require('./ShowAvaliationPersistence')
const router = express.Router()


router.get('/:userId', async (req, res) =>{
    try{
        res.send(await getAvaliations(req.params.userId))
    }catch(error){
        console.log(error)
        res.status(400).send("can't find")
    }
})

module.exports = router