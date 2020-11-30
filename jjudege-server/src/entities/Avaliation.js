const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')
const Avaliation = dbInstance.define('Avaliation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = {
    getAvaliationModel: async () => { },
    createAvaliation: async () => { },
    findAvaliationById: async () => { },
    fundAvaliationByUser: async () => { }
}