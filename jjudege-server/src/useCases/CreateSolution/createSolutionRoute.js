const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const { getProblemToSolution, save, updateSolution, getAvaliationBySolutionId, refreshAvaliation, solutionAlredyExist, getTestCasesById } = require('./CreateSolutionPersistence')
const axios = require('axios')
const { avaliate } = require('./DoAvaliation')
const { saveLog } = require('../Logs/Logs')
const AvaliationDTO = require('./AvaliationDTO')

router.post('/', async (req, res) => { //submit
    try {
        const newSolution = SolutionDTO(
            req.body.code,
            req.body.language,
            req.body.problemId,
            req.body.userId,
        )
        const newAvaliation = AvaliationDTO(
            req.body.problemTitle,
            req.body.userId
        )
        const auxObj = await save(newAvaliation, newSolution)

        const testCases = await getTestCasesById(req.body.problemId)

        res.status(200).send('submitted')

        avaliate(auxObj.newAvaliation, auxObj.newSolution, testCases)
        
    } catch (error) {
        console.log(error)
        res.status(400).send("can't save")

    }
})
router.get('/problemToSolution/:id', async (req, res) => {
    try {
        const problem = await getProblemToSolution(req.params.id)
        res.send(problem)
    } catch (err) {
        console.log(err)
        res.status(400).send(`can't find problemm info`)
    }

})
router.post('/run', async (req, res) => {
    try {
        const stdins = req.body.stdins
        const outputs = []
        const program = {
            script: req.body.script,
            language: req.body.language,
            versionIndex: "0",
            stdin: "",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }
        stdins.forEach(stdin => {
            program.stdin = stdin
            outputs.push( await axios.post('https://api.jdoodle.com/v1/execute', program))
        });
        console.log(outputs)
        res.send(outputs)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})
/**
 * return a solution object if exists
 */
router.post('/exist', async (req, res) => {
    
    try {
        let solution = {
            exist: false
        }
        let result = await solutionAlredyExist(req.body.userId, req.body.questionId)
        if (result != null) {
            solution.existingSolution = result
            solution.exist = true
            res.send(solution)
        } else {
            console.log(solution)
            res.send(solution)
        }


    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
router.post('/updateSolution', async (req, res) => {
    try {
        const prevAvaliation = await getAvaliationBySolutionId(req.body.solutionId)
        const a = await refreshAvaliation(prevAvaliation.id)
        const s = await updateSolution(req.body.codigo, req.body.language, req.body.solutionId)
        const testCases = await getTestCases(req.body.questionId)

        console.log('solução alterada -->')
        console.log(s)
        res.status(200).send('updated')
        saveLog('createSolution/updateSolution')
        avaliate(a, s, testCases)


    } catch (error) {
        console.log(error)
        res.status(400).send("can't update solution")
    }
})
module.exports = router