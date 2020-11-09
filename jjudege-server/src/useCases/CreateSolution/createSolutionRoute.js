const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const createSolutionPersistence = require('./CreateSolutionPersistence')
const { getProblemToSolution, getVisibleTestCases } = require('./CreateSolutionPersistence')
const request = require('request')
const {runCode} = require('./RunCode')



router.post('/', async (req, res) => {

    //  const data ={
    //      codigo: code,
    //      lenguage: lenguage,
    //      expected: props.expected,
    //      submit: submit
    //  }

    const url ='https://api.jdoodle.com/v1/execute'
    const program = {
        script: req.body.codigo,
        language: req.body.language,
        versionIndex: "0",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }
    if (req.body.submit == false) {
        try {
            const testCases = await getVisibleTestCases(req.body.questionId)
            console.log(testCases)
            //res.send(await runCode(program,url))
            request.post({
                url: url,
                method: "POST",
                json: program
            })
                .on('error', (error) => {
                    console.log('request.post error'.error)
                    return res.status(400).send(error)
                })
                .on('data', (data) => {
                    return res.status(200).send(data)

                })
                    
        } catch (error) {
            console.log(error)
            return res.status(400).send('request fail')
        }


    } else {
        try {
            const solutionDTO = new SolutionDTO(
                req.body.codigo,
                req.body.questionId
            )
            console.log('solution DTO')
            console.log(solutionDTO)
            createSolutionPersistence.save(solutionDTO)

            request.post({
                url: url,
                method: "POST",
                json: program
            })
                .on('error', (error) => {
                    console.log('request.post error'.error)
                    return res.status(400).send(error)
                })
                .on('data', (data) => {
                    return res.status(200).send(data)

                })

        } catch (error) {
            console.log('request fail')
            return res.status(400).send('request fail')
        }
    }
})


router.get('/:id', async (req, res) => {
    try {
        const p = await getProblemToSolution(req.params.id)
        res.send(p)
    } catch (error) {
        throw error
    }

})

module.exports = router