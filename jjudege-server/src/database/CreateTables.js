const Relation = require('../entities/Relations')

module.exports = {
    createTables: async () => {
        try {
            await Relation.makeRealations()
        } catch (error) {
            error
        }
    }
}