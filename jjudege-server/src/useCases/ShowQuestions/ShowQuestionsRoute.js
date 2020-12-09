const express = require('express')
const router = express.Router()
const { getProblems } = require('./ShowQuestionsPersistence')
const { verifyToken } = require('../verifyJWT')
const { saveLog } = require('../Logs/Logs')

router.get('/', verifyToken, async (req, res) => {
    try {
        res.send(await getProblems())
        saveLog('/showQuestions')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router