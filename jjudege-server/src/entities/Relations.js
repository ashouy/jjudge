const dbInstance = require('../database/dbInstance')
const {getQuestionModel} = require('./Question')
const {getSolutionModel } = require('./Solution')
const { getTestCaseModel } = require('./TestCase')
const {getUserModel} = require('./User')
const {getLoggerModel} = require('./Logger')
const {getAvaliationModel} = require('./Avaliation')
const Question = getQuestionModel()
const Solution = getSolutionModel()
const TestCase = getTestCaseModel()
const User = getUserModel()
const Avaliation = getAvaliationModel()
const Logger = getLoggerModel()

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

        User.hasMany(Solution,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Solution.belongsTo(User)
        
        User.hasMany(Avaliation,{
            onDelete:'CASCADE',
            onUpdate: 'CASCADE'
        })
        Avaliation.belongsTo(User)

        Solution.hasOne(Avaliation,{
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        })
        Avaliation.belongsTo(Solution)
        


        Solution.sync()
        TestCase.sync()
        Avaliation.sync()
        Logger.sync()
    }catch(error){
        return error
    }
    }
}