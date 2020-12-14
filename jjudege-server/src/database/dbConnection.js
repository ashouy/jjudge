const { Sequelize } = require('sequelize')
module.exports = {
    sequelizeInstance: (connectionURI) => {
        const [database, username, password, host, dialect, port] = connectionURI
        return new Sequelize(database, username, password, {
            host: host,
            port: port,
            dialect: dialect
        })
    }
}
