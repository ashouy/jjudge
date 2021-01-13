const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')
const Avaliation = dbInstance.define('Avaliation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    problemTitle: {
        type: DataTypes.STRING,
        allowNull: false
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
        try {
            const newAvaliation = await Avaliation.create(
                {
                    problemTitle: avaliation.problemTitle,
                    status: avaliation.status,
                    result: avaliation.result,
                    SolutionId: avaliation.solutionId,
                    UserId: avaliation.userId
                }, { transaction: avaliation.transaction })
            return newAvaliation
        } catch (err) {
            console.log(error)
            return err
        }
    },
    findAvaliationBySolutionId: async solutionId => {
        try {
            const a = await Avaliation.findOne({
                where: {
                    SolutionId: solutionId
                }
            })
            return a
        } catch (err) {
            console.log(err)
            return err
        }
    },
    /***
     * 
     */
    updateAvaliationState: async (status, id, transaction) => {
        try {
            await Avaliation.update(
                { status: status },
                {
                    where: {
                        id: id
                    },
                    transaction: transaction
                }
            )
        } catch (err) {
            console.log(err)
            return err
        }
    },
    updateAvaliationResult: async (result, id, transaction) => {
        try {
            await Avaliation.update({ result: result }, {
                where: {
                    id: id
                },
                transaction: transaction
            })
        } catch (error) {
            console.log(error)
        }
    },
    refreshAvaliation: async avaliationId => {
        try {
            const a = await Avaliation.findOne({
                where: {
                    id: avaliationId
                }
            })
            a.status = 0
            a.result = 1
            await a.save()
            return a
        } catch (error) {
            console.log(error)
        }
    },
    findAvaliationByUserId: async userId => {
        try {
            const a = await Avaliation.findAll({
                where: {
                    UserId: userId
                }
            })
            return a
        } catch (error) {
            console.log(error)
        }
    }

}