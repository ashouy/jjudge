const { createSolution } = require('../../entities/Solution')
const {findProblemById} = require('../../entities/Question')
const {findVisibleTestCases} = require('../../entities/TestCase')
module.exports = {
    save: (solution) =>{
        createSolution(solution)
    },
    getProblemToSolution: async problemId =>{
        return await findProblemById(problemId)
    },
    getVisibleTestCases: async problemId =>{
        return await findVisibleTestCases(problemId)
    }
    
}