const dbInstance = require('../database/dbInstance')
const {getQuestionModel} = require('./Question')
const {getSolutionModel } = require('./Solution')
const { getTestCaseModel } = require('./TestCase')

const Question = getQuestionModel()
const Solution = getSolutionModel()
const TestCase = getTestCaseModel()

module.exports ={
    makeRealations: () =>{
        try{
        Question.hasMany(Solution,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Solution.belongsTo(Question)
        
        Question.hasMany(TestCase,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        TestCase.belongsTo(Question)

        Solution.sync()
        TestCase.sync()
    }catch(error){
        return error
    }
    }
}