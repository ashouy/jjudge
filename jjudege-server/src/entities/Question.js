const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const Question = dbInstance.define('Question', {
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
    }

})
module.exports = {
    getQuestionModel: () => {
        return Question
    },
    createQuestionTable: () => {
        Question.sync()
    },
    createQuestion: (params) => {
        try {
            const question = Question.create({
                title: params.title,
                enunciated: params.enunciated
            })
            return question
        } catch (error) {
            return error
        }
    },
    findProblemById: async (id) => {
        try {
            return await Question.findByPk(id)
        }
        catch (error) {
            console.log(error)
        }

    },
    findAll: async () =>{
        try{
            const questions = Question.findAll({
                order:[['title', 'DESC']]
            })
            return questions
        }catch(error){
            console.log(error)
        }
    }

}