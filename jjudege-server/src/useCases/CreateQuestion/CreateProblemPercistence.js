const { createTestCase } = require('../../entities/TestCase')
const { createQuestion } = require('../../entities/Question')
module.exports = {
    saveQuestion: async (question) => {
        try {
            const q = await createQuestion(question)
            return q.id
        } catch (error) {
            return error
        }
    },
    saveTestCases:async (testCases, questionId) => {
        try {
            for (let i = 0; i < testCases.length; i++) {
                await createTestCase(testCases[i], questionId)
                console.log(`inserted : ${i}`)
            }
            return 'ok'
        } catch (error) {
            return error
        }
    }

}