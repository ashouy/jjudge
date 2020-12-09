const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const User = dbInstance.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})
module.exports = {
    getUserModel: () => {
        return User
    },
    createUserTable: async () => {
        await User.sync()
     },
    createUser: async user => {
        try {
            const u = await User.create({
                name: user.name,
                email: user.email,
                password: user.password,
                admin: 0
            })
            return u
        } catch (error) {
            console.log(error)
            return error
        }
    },
    findUserByEmail_Password: async user => {
        try {
            const u = await User.findOne({
                where: {
                    email: user.email,
                    password: user.password
                }
            })
            return u
        } catch (error) {
            console.log(error)
            return error
        }
    },
}