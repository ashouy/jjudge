const {findAll} = require('../../entities/Question')
module.exports ={
    getProblems: async () =>{
        return await findAll();
    }
}