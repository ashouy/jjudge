const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const Logger = dbInstance.define('Logger', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.STRING,
        allowNull: false
    },
    log: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    getLoggerModel: () => {
        return Logger
    },
    createLoggerTable: async () => {
        await Logger.sync()
    },
    createLog: async (log) => {
        try {
            const c = await Logger.create({
                userId: log.id,
                log: log.log
            })
            return c
        } catch (error) {
            console.log(error)
            return error
        }
    }
}