const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const Problem = dbInstance.define('Problem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enunciated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rate:{
        type: DataTypes.FLOAT,
        allowNull: false
    }

})
module.exports = {
    getProblemModel: () => {
        return Problem
    },
    createQuestionTable: async() => {
        await Problem.sync()
    },
    createQuestion: async (problem) => {    
        try {
            const newProblem = await Problem.create({
                title: problem.title,
                enunciated: problem.enunciated,
                level: problem.level,
                rate: problem.rate
            })
            return newProblem
        } catch (err) {
            return err
        }
    },
    findProblemById: async (id) => {
        try {
            return await Problem.findByPk(id)
        }
        catch (err) {
            console.log(err)
            return err
        }
    },
    findAll: async () =>{
        try{
            const questions = Problem.findAll({
                order:[['title', 'DESC']]
            })
            return questions
        }catch(err){
            console.log(err)
            return err
        }
    },
    findAllByTag: async (tag) =>{
        try{
            const problems = Problem.findAll({
                where:{
                    tag: tag
                }
            })
            return problems
        }catch(err){
            console.log(err)
            return err
        }
    }

}