const express = require('express')
const router = express.Router()
const { getProblems } = require('./ShowQuestionsPersistence')

router.get('/', async (req, res) => {
    try {
        res.send(await getProblems())
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router