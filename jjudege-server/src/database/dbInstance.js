
const dbConnection = require('./dbConnection')

const connectionData =[
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_HOST,
    process.env.DB_DIALECT,
    process.env.DB_PORT
]
console.log(connectionData)
const sequelize = dbConnection.sequelizeInstance(connectionData)
    
try {
    sequelize.authenticate()
    console.log('db connected')
} catch (error) {
    console.log('db connection failed')
}

module.exports = sequelize