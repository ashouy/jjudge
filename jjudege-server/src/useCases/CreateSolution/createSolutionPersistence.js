const Solution = require('../../entities/Solution')
const { createSolution } = require('../../entities/Solution')
module.exports = {
    save: (solution) =>{
        createSolution(solution)
    }
}