const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const createSolutionPersistence = require('./CreateSolutionPersistence')
const { getProblemToSolution } = require('./CreateSolutionPersistence')
const request = require('request')
router.post('/', async (req, res) => {

    //  const data ={
    //      codigo: code,
    //      lenguage: lenguage,
    //      expected: props.expected,
    //      submit: submit
    //  }

    const program = {
        script : req.body.codigo,
        language: req.body.language,
        versionIndex: "0",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }
    if (req.body.submit == false) {
        try{
            request.post({
                url :"https://api.jdoodle.com/v1/execute",
                method: "POST",
                json: program
            })
            .on('error', (error) =>{
                console.log('request.post error'. error)
                return res.status(400).send(error)
            })
            .on('data', (data) =>{
                const parseData = JSON.parse(data.toString())
                if(parseData.error){
                    return res.status(400).send(parseData)
                }else{
                    return res.status(200).send({runResult: parseData})
                }
            })
        }catch(error){
            console.log('request fail')
            return res.status(400).send('request fail')
        }


    }else{
        try{
            request.post({
                url :"https://api.jdoodle.com/v1/execute",
                method: "POST",
                json: program
            })
            .on('error', (error) =>{
                console.log('request.post error'. error)
                return res.status(400).send(error)
            })
            .on('data', (data) =>{
                const parseData = JSON.parse(data.toString())
                if(parseData.error){
                    return res.status(400).send(parseData)
                }else{
                    return res.status(200).send({runResult: parseData})
                }
            })

            const solutionDTO = new SolutionDTO(
                req.body.codigo,
                req.body.questionId
            )
            createSolutionPersistence.save(solutionDTO)

        }catch(error){
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