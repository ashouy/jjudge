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
    tag:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

})
module.exports = {
    getProblemModel: () => {
        return Problem
    },
    createQuestionTable: async() => {
        Problem.sync()
    },
    createQuestion: (params) => {
        try {
            const Problem = Problem.create({
                title: params.title,
                enunciated: params.enunciated
            })
            return Problem
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