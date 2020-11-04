const { createTestCase } = require('../../entities/TestCase')
const { createQuestion } = require('../../entities/Question')
module.exports = {
    saveQuestion: async (question) => {
        console.log('in save question')
        try {
            const q = await createQuestion(question)
            return  q.id
        } catch (error) {
            console.log(error)
        }
    },
    saveTestCases: (testCases, questionId) => {
        try {
            for(let i = 0 ; i < testCases.length ; i++){
                createTestCase(testCases[i], questionId)
            }
            return 'ok'
        } catch (error) {
            return error
        }
    }

}