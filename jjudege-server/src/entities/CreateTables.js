const Question = require('./Question')
const Solution = require('./Solution')
const Relation = require('./Relations')


module.exports = {
    createTables: async () => {
        try {
            await Question.createQuestionTable()
            await Relation.makeRealations()
        } catch (error) {
            error
        }
    }
}