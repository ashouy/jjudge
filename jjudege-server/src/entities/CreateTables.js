const Question = require('./Question')
const Solution = require('./Solution')
const Relation = require('./Relations')


module.exports = {
    createTables: () =>{
        Question.createQuestionTable()
        Relation.makeRealations()
        
    }
}