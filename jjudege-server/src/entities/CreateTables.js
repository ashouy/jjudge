const Question = require('./Question')
const Relation = require('./Relations')
const User = require('./User')

module.exports = {
    createTables: async () => {
        try {
            // await User.createUserTable()
            // await Question.createQuestionTable()
            await Relation.makeRealations()

        } catch (error) {
            error
        }
    }
}