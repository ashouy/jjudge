const express = require('express')
const router = express.Router()
const { saveQuestion, saveTestCases } = require('./CreateProblemPercistence')

router.post('/', async (req, res) => {
    const question = {
        title: req.body.title,
        enunciated: req.body.enunciated
    }
    const testCases = req.body.testcases
    var status = 200
    var message = 'saved'
    var qId = 0
    var questionSaved = false
    try {
        qId = await saveQuestion(question)
        questionSaved = true
    } catch (error) {
        console.log(error)
        status = 400
        message = `can't save`
    }
    if (questionSaved) {
        try {
            await saveTestCases(testCases, qId)
        } catch (error) {
            console.log(error)
            status = 400
            message = `can't save`
        }
    }
    res.status(status).send(message)
})

module.exports = router