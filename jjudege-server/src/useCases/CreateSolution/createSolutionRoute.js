const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const { getProblemToSolution, getVisibleTestCases, save, saveAvaliation, getTestCases, updateSolution, getAvaliationBySolutionId, refreshAvaliation, solutionAlredyExist } = require('./CreateSolutionPersistence')
const axios = require('axios')
const { avaliate } = require('./DoAvaliation')
const sequelize = require('../../database/dbInstance')
const { verifyToken } = require('../verifyJWT')
const {saveLog} = require('../Logs/Logs')

const url = 'https://api.jdoodle.com/v1/execute'
router.post('/', verifyToken, async (req, res) => { //submit
    try {

        const result = sequelize.transaction(async (t) => {

            const solution = {
                codigo: req.body.codigo,
                language: req.body.language,
                questionId: req.body.questionId,
                userId: req.body.userId,
                transaction: t
            }
            const s = await save(solution)
            const avaliation = {
                problemTitle: req.body.problemTitle,
                status: 0, //enfileirada
                result: 1, //errado
                solutionId: s.id,
                userId: req.body.userId,
                transaction: t
            }
            const a = await saveAvaliation(avaliation)
        })
        saveLog('/createSolution')
        const testCases = await getTestCases(req.body.questionId)

        res.status(200).send('submitted')

        avaliate(a, s, testCases)


    } catch (error) {
        console.log(error)
        res.status(400).send("can't save")

    }
})
router.get('/problemToSolution/:id', verifyToken, async (req, res) => {
    try {
        const p = await getProblemToSolution(req.params.id)
        res.send(p)
    } catch (error) {
        throw error
    }

})
router.post('/run', verifyToken, async (req, res) => {
    try {
        console.log(req.body)
        const program = {
            script: req.body.script,
            language: req.body.language,
            versionIndex: "0",
            stdin: req.body.stdin,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }
        let output = await axios.post('https://api.jdoodle.com/v1/execute', program)

        console.log(output.data)
        saveLog('createSolution/run')
        res.send(output.data)
    } catch (error) {
        console.log(error)
        res.send(erro)
    }
})
router.get('/visibleTestCases/:questionId', verifyToken, async (req, res) => {
    try {
        let visibleTestCases = []
        const proto = await getVisibleTestCases(req.params.questionId)
        console.log(proto)
        for (let i = 0; i < proto.length; i++) {
            visibleTestCases.push(proto[i].dataValues)
        }
        res.send(visibleTestCases)

    } catch (error) {

        res.send(error)
    }

})
router.post('/exist', verifyToken, async (req, res) => {
    try {
        let solution = {
            new: true
        }
        console.log(req.body)
        let result = await solutionAlredyExist(req.body.userId, req.body.questionId)
        if (result != null) {
            solution.solutionId = result.id
            solution.new = false
            solution.codigo = result.codigo
            solution.language = result.language
            console.log(solution)
            res.status(200).send(solution)
        } else {
            console.log(solution)
            res.send(solution)
        }


    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
router.post('/updateSolution', verifyToken, async (req, res) => {
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