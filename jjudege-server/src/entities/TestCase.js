const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')


const TestCase = dbInstance.define('TestCase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    input: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expectedOutput: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = {
    getTestCaseModel: () => {
        return TestCase
    },
    createTestCaseTable: () => {
        TestCase.sync()
    },
    createTestCase: (params, questionId) => {
        try {     
            const testCase = TestCase.create({
                name: params.title,
                input: params.input,
                expectedOutput: params.expected,
                visibility: params.visibility,
                QuestionId: questionId
            })
            return testCase
        } catch (error) {
            console.log(error)
        }
    },
    findVisibleTestCases: async (questionId) =>{
        try{
            const visibleTestCases = await TestCase.findAll({
                where:{
                    visibility: true,
                    QuestionId: questionId
                }
            })
            return visibleTestCases
        }catch(error){
            console.log(error)
        }
    },
    getTestCases: async questionId =>{
        try{
            const testCases = await TestCase.findAll({
                where:{
                    QuestionId: questionId
                }
            })
            return testCases
        }catch(error){
            console.log(error)
            return error
        }
    }
}
