const { DataTypes } = require('sequelize')
const { hasHook } = require('../database/dbInstance')
const dbInstance = require('../database/dbInstance')

const Solution = dbInstance.define('Solution', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    getSolutionModel: () => {
        return Solution
    },
    createSolutionTable: () => {
        Solution.sync()
    },
    createSolution: async solution => {
        try {
            const s = await Solution.create(
                {
                    codigo: solution.codigo,
                    language: solution.language,
                    ProblemId: solution.problemId,
                    UserId: solution.userId
                }, { transaction: solution.transaction })
            return s
        } catch (error) {
            console.log(error)
        }
    },
    findByUser: async (userId, problemId) => {
        try {
            const s = await Solution.findOne({
                where: {
                    ProblemId: problemId,
                    UserId: userId
                }
            })
            return s
        } catch (error) {
            console.log(error)
            return error
        }
    },
    updateSolution: async (language, codigo, solutionId, transaction) => {
        try {
            const s = await Solution.findOne({
                where: {
                    id: solutionId
                }
            })
            
            s.codigo = codigo,
                s.language = language
            await s.save({transaction: transaction})
            return s
        } catch (error) {
            console.log(error)
        }
    }
}