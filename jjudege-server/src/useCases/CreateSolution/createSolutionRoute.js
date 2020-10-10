const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const createSolutionPersistence = require('./createSolutionPersistence')
const { findProblemById } = require('../../entities/Question')

router.post('/', (req, res) => {
    const solutionDTO = new SolutionDTO(
       req.body.codigo,
       req.body.questionId
    )
    createSolutionPersistence.save(solutionDTO)

    res.send('solution submitted')
    
})
router.get('/', (req,res) =>{
    res.send(findProblemById(req.body.id))
    
})

module.exports = router