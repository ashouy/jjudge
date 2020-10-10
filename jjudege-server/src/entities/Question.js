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
    },
    expected: {
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
    createQuestion: (title, enunciated, expected) => {
        try {
            const q = Question.create({
                title: title,
                enunciated: enunciated,
                expected: expected,
            })
        } catch (error) {
            console, console.log(error);
        }
    },
    findProblemById(id) {
        const problem = await Question.findByPk(id, {
            attributes: ['title', 'enunciated']})
        if( problem === null){
            return console.log('not found')
        }else{
            return problem
        }
    }

}