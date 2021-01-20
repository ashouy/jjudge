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
    createTestCase: async (testCase, questionId, incomingTransaction) => {
        try {
            const testCase = await TestCase.create({
                name: testCase.title,
                input: testCase.input,
                expectedOutput: testCase.expected,
                visibility: testCase.visibility,
                QuestionId: questionId
            },
                {transaction: incomingTransaction}
            )
            return testCase
        } catch (err) {
            console.log(err)
            return err
        }
    },
    findVisibleTestCases: async (questionId) => {
        try {
            const visibleTestCases = await TestCase.findAll({
                where: {
                    visibility: true,
                    QuestionId: questionId
                }
            })
            return visibleTestCases
        } catch (error) {
            console.log(error)
        }
    },
    getTestCases: async questionId => {
        try {
            const testCases = await TestCase.findAll({
                where: {
                    QuestionId: questionId
                }
            })
            return testCases
        } catch (error) {
            console.log(error)
            return error
        }
    }
}
