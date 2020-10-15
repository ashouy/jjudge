const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const { json } = require('body-parser')
const router = express.Router()
const createSolutionPersistence = require('./createSolutionPersistence')
const { getProblemToSolution } = require('./createSolutionPersistence')

router.post('/', (req, res) => {
    const solutionDTO = new SolutionDTO(
       req.body.codigo,
       req.body.questionId
    )
    createSolutionPersistence.save(solutionDTO)

    res.send('solution submitted')
    
})
router.get('/:id', async (req,res) =>{
    try{
        const p = await getProblemToSolution(req.params.id)
        res.send(p)
    }catch(error){
        throw error
    }
    
})

module.exports = router