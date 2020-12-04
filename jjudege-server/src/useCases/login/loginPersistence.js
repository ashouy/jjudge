const { createUser,findUserByEmail_Password } = require('../../entities/User')

module.exports = {
    save: async user => {
        return await createUser(user)
    },
    getUser: async user => {
        return await findUserByEmail_Password(user)
    }
}