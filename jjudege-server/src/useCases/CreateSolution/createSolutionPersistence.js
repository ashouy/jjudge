const { createSolution, findByUser, updateSolution } = require('../../entities/Solution')
const { findProblemById } = require('../../entities/Question')
const { findVisibleTestCases, getTestCases } = require('../../entities/TestCase')
const { createAvaliation, findAvaliationBySolutionId, refreshAvaliation } = require('../../entities/Avaliation')
const sequelize = require('../../database/dbInstance')
module.exports = {
    save: async (solution, avaliation) => {
        const createSolutionTransaction = await sequelize.transaction()
        try {
            solution.transaction = createSolutionTransaction
            avaliation.transaction = createSolutionTransaction

            const newSolution = await createSolution(solution)
            const newAvaliation = await createAvaliation(avaliation)

            await createSolutionTransaction.commit()

            return {
                newSolution: newSolution,
                newAvaliation: newAvaliation
            }

        } catch (err) {
            await createSolutionTransaction.rollback()
            console.log(err)
            return err
        }
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
    getTestCasesById: async questionId => {
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
    getAvaliationBySolutionId: async solutionId => {
        return await findAvaliationBySolutionId(solutionId)
    },
    refreshAvaliation: async avaliationId => {
        return await refreshAvaliation(avaliationId)
    }

}