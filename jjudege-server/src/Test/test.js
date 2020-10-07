const Solution = require('../entities/Solution')

const s = Solution.getSolutionModel()

module.exports = {
    makeTest : () =>{
        s.create({
            codigo: 'codigo teste',
            QuestionId: 1
        })
    }

}

