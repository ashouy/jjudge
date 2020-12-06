const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')
const { createQuestion } = require('./Question')

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
            const s = await Solution.create({
                codigo: solution.codigo,
                language: solution.language,
                QuestionId: solution.questionId,
                UserId: solution.userId
            })
            return s
        } catch (error) {
            console.log(error)
        }
    },
    findByUser: async (userId, questionId) => {
        try {
            const s = await Solution.findOne({
                where: {
                    QuestionId: questionId,
                    UserId: userId
                }
            })
            return s
        } catch (error) {
            console.log(error)
            return error
        }
    },
    updateSolution: async (language, codigo, solutionId) => {
        try {
            const s = await Solution.findOne({
                where:{
                    id: solutionId
                }
            })
            s.codigo = codigo,
            s.language = language
            await s.save()
            return s
        } catch (error) {
            console.log(error)
        }
    }
}