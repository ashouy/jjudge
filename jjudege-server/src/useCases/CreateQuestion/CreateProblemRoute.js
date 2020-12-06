const express = require('express')
const router = express.Router()
const { saveQuestion, saveTestCases } = require('./CreateProblemPercistence')
const ProblemDTO = require('./ProblemDTO')
const TestCaseDTO = require('./TestCaseDTO')
const {} = require('../verifyJWT')
const {verifyToken} = require('../verifyJWT')
router.post('/', verifyToken, async (req, res) => {
    
    const problem = new ProblemDTO(req.body.title, req.body.enunciated)
    const testCases = new TestCaseDTO(req.body.testcases)
    console.log(problem)
    console.log(testCases)
    var status = 200
    var message = 'saved'
    var qId = 0
    var questionSaved = false
    try {
        qId = await saveQuestion(problem)
        questionSaved = true
    } catch (error) {
        console.log(error)
        status = 400
        message = `can't save`
    }

    if (questionSaved === true) {
        try {
            await saveTestCases(testCases.testCases, qId)
        } catch (error) {
            console.log(error)
            status = 400
            message = `can't save`
        }
    }
    res.status(status).send(message)
})

module.exports = router