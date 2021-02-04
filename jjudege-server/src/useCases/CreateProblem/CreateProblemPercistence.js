const { createTestCase } = require('../../entities/TestCase')
const { createProblem } = require('../../entities/Problem')
const sequelize = require('../../database/dbInstance')
module.exports = {
    saveProblem: async (problem, testCases) => {
        const createProblemTransaction = await sequelize.transaction()
        try {
            const newProblem = await createProblem(problem, createProblemTransaction)
            for (let i = 0; i < testCases.length; i++) {
                await createTestCase(testCases[i], newProblem.id, createProblemTransaction)
            }
            await createProblemTransaction.commit()

            return newProblem
        } catch (err) {
            await createProblemTransaction.rollback()
            console.log(err)
            return err
        }
    }

}