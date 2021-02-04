const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const Logger = dbInstance.define('Logger', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
            const userLog = await Logger.create({
                userId: log.id,
                log: log.log
            })
            return userLog
        } catch (err) {
            console.log(err)
            return err
        }
    },
    findByUserId: async (userId) =>{
        try{
            const logs = await Logger.findAll({
                where:{
                    userId: userId
                }
            })
            return logs
        }catch(err){
            console.log(err)
            return err
        }
    }
}