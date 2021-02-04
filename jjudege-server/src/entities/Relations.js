const dbInstance = require('../database/dbInstance')
const { getSolutionModel } = require('./Solution')
const { getTestCaseModel } = require('./TestCase')
const { getUserModel } = require('./User')
const { getLoggerModel } = require('./Logger')
const { getAvaliationModel } = require('./Avaliation')
const { getProblemModel } = require('./Problem')
const {getTagModel} = require('./Tag')
const Problem = getProblemModel()
const Solution = getSolutionModel()
const TestCase = getTestCaseModel()
const User = getUserModel()
const Avaliation = getAvaliationModel()
const Logger = getLoggerModel()
const Tag = getTagModel()
module.exports = {
    makeRealations: async () => {
        try {
            Problem.hasMany(Solution, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            Solution.belongsTo(Problem)

            User.hasMany(Solution, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            Solution.belongsTo(User)

            Solution.hasOne(Avaliation, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            Avaliation.belongsTo(Solution)

            Tag.hasOne(Problem,{
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            })
            Problem.belongsTo(Tag)
            
            User.hasMany(Logger,{
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            Logger.belongsTo(User)

            Problem.hasMany(TestCase,{
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            TestCase.belongsTo(Problem)

            User.hasMany(Problem,{
                onDelete: 'NO ACTION',
                onUpdate: 'CASCADE'
            })
            Problem.belongsTo(User)
            console.log("syncing")

            await dbInstance.sync()
        } catch (error) {
            return error
        }
    }


}