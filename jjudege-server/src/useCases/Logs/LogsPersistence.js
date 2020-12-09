const { createLog } = require('../../entities/Logger')

module.exports ={
    saveLog: async log =>{
        return await createLog(log)
    }
}