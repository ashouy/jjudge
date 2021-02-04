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
    findAvaliationBySolutionId: async (solutionId) => {
        try {
            const avaliation = await Avaliation.findOne({
                where: {
                    SolutionId: solutionId
                }
            })
            return avaliation
        } catch (err) {
            console.log(err)
            return err
        }
    },
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
        } catch (err) {
            console.log(err)
            return err
        }
    },

    refreshAvaliation: async (avaliationId, transaction) => {
        try {
            const updatedAvaliation = await Avaliation.findOne({
                where: {
                    id: avaliationId
                }
            })
            updatedAvaliation.status = 0
            updatedAvaliation.result = 1
            await updatedAvaliation.save({transaction: transaction})
            return updatedAvaliation
        } catch (err) {
            console.log(err)
            return err
        }
    },
    /**
     * 
     * @param {*} userId - the user id to bring him all avaliations
     */
    findAllAvaliationByUserId: async userId => {
        try {
            const avaliations = await Avaliation.findAll({
                where: {
                    UserId: userId
                }
            })
            return avaliations
        } catch (err) {
            console.log(err)
            return err
        }
    }

}