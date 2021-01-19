var db = require('./entities/Relations')
require('dotenv').config()
module.exports ={
    startSever: async () =>{
        await db.makeRealations()
    }
}