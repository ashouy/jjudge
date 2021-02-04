const {findAll} = require('../../entities/Problem')
module.exports ={
    getProblems: async () =>{
        return await findAll();
    }
}