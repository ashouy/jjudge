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
    getAvaliationModel: () => { 
        return Avaliation
    },
    createAvaliationTable: async () => {
        await Avaliation.sync()
     },
    createAvaliation: async avaliation => {
        try{
            const a = await Avaliation.create({
                status: avaliation.status,
                result: avaliation.result,
                SolutionId: avaliation.SolutionId,
                UserId: avaliation.UserId
            })
            return a
        }catch(error){
            console.log(error)
            return error
        }
     },
    findAvaliationById: async () => { },
    fundAvaliationByUser: async () => { }
}