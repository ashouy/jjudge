const { DataTypes } = require('sequelize')
const dbInstance = require('../database/dbInstance')

const Tag = dbInstance.define('Tag', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = {
    getTagModel: () => {
        return Tag
    },
    createTagTable: async () => {
        await Tag.sync()
    },
    createTag: async (tag) => {
        try {
            const newTag = await Tag.create({
                name: tag.name
            })
            return newTag
            
        } catch (err) {
            console.log(err)
            return err
        }
    }
}