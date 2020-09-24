const { v4: uuidv4 } = require('uuid')

class SolutionDTO {
    constructor(id, codigo) {
        if (id == undefined) {
            this.id = uuidv4()
        } else {
            this.id = id
        }
        this.codigo = codigo
    }
}

module.exports = SolutionDTO