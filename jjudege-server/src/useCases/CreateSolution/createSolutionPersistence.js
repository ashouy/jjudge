const { createSolution, findByUser, updateSolution } = require('../../entities/Solution')
const { findProblemById } = require('../../entities/Question')
const { findVisibleTestCases, getTestCases } = require('../../entities/TestCase')
const { createAvaliation, findAvaliationBySolutionId, refreshAvaliation } = require('../../entities/Avaliation')
module.exports = {
    save: async solution => {
        return await createSolution(solution)
    },
    getProblemToSolution: async problemId => {
        return await findProblemById(problemId)
    },
    getVisibleTestCases: async problemId => {
        return await findVisibleTestCases(problemId)
    },
    solutionAlredyExist: async (userId, questionId) => {
        return await findByUser(userId, questionId)
    },
    saveAvaliation: async avaliation => {
        return await createAvaliation(avaliation)
    },
    getTestCases: async questionId => {
        const proto = await getTestCases(questionId)
        let t = []
        for (let i = 0; i < proto.length; i++) {
            t.push(proto[i].dataValues)
        }
        return t
    },
    updateSolution: async (codigo, language, solutionId) => {
        return await updateSolution(language, codigo, solutionId)
    },
    getAvaliationBySolutionId: async solutionId =>{
        return await findAvaliationBySolutionId(solutionId)
    },
    refreshAvaliation: async avaliationId =>{
        return await refreshAvaliation(avaliationId)
    }

}