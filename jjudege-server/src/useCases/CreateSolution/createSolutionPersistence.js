const { createSolution } = require('../../entities/Solution')
const {findProblemById} = require('../../entities/Question')
module.exports = {
    save: (solution) =>{
        createSolution(solution)
    },
    getProblemToSolution: async problemId =>{
        return await findProblemById(problemId)
    }
    
}