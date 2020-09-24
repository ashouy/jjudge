const { DataTypes, Model } = require('sequelize')
const dbInstance = require('./dbInstance')

class Solution extends Model{}

Solution.init({
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: dbInstance,
    modelName: 'Solution'
})
try{
    Solution.sync({force: true})
}catch(err){
    console.log(err)
}
    console.log(Solution === dbInstance.model.Solution)