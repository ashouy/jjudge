const { saveLog } = require("./LogsPersistence")

var userIdLog

module.exports ={
    setUserId: userId=>{
        userIdLog = userId
    },
    saveLog: async endPoint =>{
        let log ={
            id: userIdLog,
            log: endPoint
        }
        saveLog(log)
    }
}