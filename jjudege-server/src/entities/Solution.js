const {DataTypes} = require('sequelize')
const dbInstance = require('../database/dbInstance')
const { createQuestion } = require('./Question')

const Solution = dbInstance.define('Solution',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    getSolutionModel: ()=>{
        return Solution
    },
    createSolutionTable: () =>{
        Solution.sync()
    },
    createSolution: async(solution) =>{
        try{
            const s = await Solution.create({
                codigo: solution.codigo,
                QuestionId: solution.questionId,
                UserId: solution.userId
            })
        }catch(error){
            console.log(error)
        }
    }
}