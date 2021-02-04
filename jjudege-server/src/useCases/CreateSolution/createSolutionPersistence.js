const { createSolution, findByUser, updateSolution } = require('../../entities/Solution')
const { findProblemById } = require('../../entities/Problem')
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
    /** 
     * get problem info and problem visible test cases
     */
    getProblemToSolution: async problemId => {
        try {
            let visibleTestCases = []
            const problem = await findProblemById(problemId)
            const proto = await findVisibleTestCases(problemId)
            for (let i = 0; i < proto.length; i++) {
                visibleTestCases.push(proto[i].dataValues)
            }
            problem.visibleTestCases = visibleTestCases
            return problem

        } catch (err) {
            console.log(err)
            return err
        }

    },
    solutionAlredyExist: async (userId, problemId) => {
        return await findByUser(userId, problemId)
    },
    /**
     * return all visible test case of the given problem Id
     * @param {*} problemId
     */
    getTestCasesById: async problemId => {
        const proto = await getTestCases(problemId)
        let t = []
        for (let i = 0; i < proto.length; i++) {
            t.push(proto[i].dataValues)
        }
        return t
    },
    /**
     * update script and language of the given problem Id
     * @param {*} codigo 
     * @param {*} language 
     * @param {*} solutionId 
     * @param {*} transaction
     */
    updateSolution: async (codigo, language, solutionId, transaction) => {
        return await updateSolution(language, codigo, solutionId, transaction)
    },
    getAvaliationBySolutionId: async solutionId => {
        return await findAvaliationBySolutionId(solutionId)
    },
    /**
     * set avaliation status to 'enqueue' and result to 'wrong'
     * @param avaliationId 
     */
    refreshAvaliation: async (avaliationId, transaction) => {
        await refreshAvaliation(avaliationId, transaction)
    }

}