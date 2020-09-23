const {Sequelize} = require('sequelize')

module.exports = {
    sequelizeInstance:(connectionURI) =>{    
        const [database, username, password,host,dialect] = connectionURI
        return  new Sequelize(database,username,password,{
            host: host,
            dialect: dialect
        })
    }
}
