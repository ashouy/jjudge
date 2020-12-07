const { findAvaliationByUserId } = require('../../entities/Avaliation')

module.exports ={
    getAvaliations: async userId =>{
        return await findAvaliationByUserId(userId)
    }
}