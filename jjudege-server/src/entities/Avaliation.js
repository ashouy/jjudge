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
                SolutionId: avaliation.solutionId,
                UserId: avaliation.UserId
            })
            return a
        }catch(error){
            console.log(error)
            return error
        }
     },
    findAvaliationBySolutionId: async solutionId => {
        try{
            const a = await Avaliation.findOne({
                where:{
                    SolutionId: solutionId
                }
            })
            return a
        }catch(error){
            console.log(error)
        }
     },
    updateAvaliationState: async (status, id) =>{
        try{
            await Avaliation.update({status: status},{
                where:{
                    id: id
                }
            })
        }catch(error){
            console.log(error)
        }
    },
    updateAvaliationResult: async (result, id) =>{
        try{
            await Avaliation.update({result: result},{
                where:{
                    id:id
                }
            })
        }catch(error){
            console.log(error)
        }
    },
    refreshAvaliation: async avaliationId =>{
        try{
            const a = await Avaliation.findOne({
                where:{
                    id: avaliationId
                }
            })
            a.status = 0
            a.result = 1
            await a.save()
            return a
        }catch(error){
            console.log(error)
        }
    }

}