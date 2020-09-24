const express = require('express')
const SolutionDTO = require('./SolutionDTO')
const Solution = require('../../entities/Solution')
const router = express.Router()

router.post('/', (req, res) => {
    const solutionDTO = new SolutionDTO(
        req.body. id,
        req.body.codigo
    )
    const solution = Solution(solutionDTO.id,solutionDTO.codigo)
    
    
})

module.exports = router