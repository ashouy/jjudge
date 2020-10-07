const dbInstance = require('../database/dbInstance')
const {getQuestionModel} = require('./Question')
const {getSolutionModel } = require('./Solution')

const Question = getQuestionModel()
const Solution = getSolutionModel()

module.exports ={
    makeRealations: () =>{
        Question.hasMany(Solution,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Solution.belongsTo(Question)
        Solution.sync()
    }
}