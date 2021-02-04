const express = require('express')
const router = express.Router()
const { getProblems } = require('./ShowQuestionsPersistence')
const { saveLog } = require('../Logs/Logs')

router.get('/', async (req, res) => {
    try {
        res.send(await getProblems())
        saveLog('/showQuestions')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router