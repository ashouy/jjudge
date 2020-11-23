const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const createSolutionPersistence = require('./CreateSolutionPersistence')
const { getProblemToSolution, getVisibleTestCases } = require('./CreateSolutionPersistence')
const request = require('request')
const { runCode } = require('./RunCode')
const axios = require('axios')
const fs = require('fs')


const url = 'https://api.jdoodle.com/v1/execute'
router.post('/', async (req, res) => { //submit


    var program = {}
    if (req.body.submit == false) {
        try {
            const testCases = await getVisibleTestCases(req.body.questionId)
            var result = []
            program = {
                script: req.body.codigo,
                language: req.body.language,
                versionIndex: "0",
                stdin: '',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            }
            for (let i = 0; i < testCases.length; i++) {

                program.stdin = testCases[i].dataValues.input
                //console.log(testCases[i].dataValues.input)
                console.log(program.stdin)
                /**
                 * Avaliação{
                 * id: 
                 * estado: enq, running, finished
                 *  
                 * }
                 * 
                */
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
                        console.log(data)
                        result.push(data)
                    })
            }
            setTimeout(() => { console.log(result) }, 4000)
            setTimeout(() => { res.status(200).send(result) }, 5000)
            /*
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
                                console.log(data)
                                return res.status(200).send(data)
            
                            })
             */
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


router.get('/problemToSolution/:id', async (req, res) => {
    try {
        const p = await getProblemToSolution(req.params.id)
        res.send(p)
    } catch (error) {
        throw error
    }

})
router.post('/run', async (req, res) => {
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
        res.send(output.data)
    } catch (error) {
        console.log(error)
        res.send(erro)
    }
})
router.get('/visibleTestCases', async (req, res) => {
    try {

        let teste = []
        teste.push({
            id: 1,
            title: 'titulo1',
            input: 'a\nb',
            expected: 'c'
        })
        teste.push({
            id: 2,
            title: 'titulo2',
            input: 'd\ne',
            expected: 'f'
        })
        res.send(teste)

    } catch (error) {

        res.send(error)
    }

})


module.exports = router