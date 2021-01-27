const axios = require('axios')
const { uuid } = require('uuidv4')
const { updateAvaliationState, updateAvaliationResult } = require('../../entities/Avaliation')

var avaliationList = []
const runCode = async (solution, testCases) => {
    try {
        let program = {
            script: solution.codigo,
            language: solution.language,
            versionIndex: "0",
            stdin: '', //alterar stdin para cada caso de teste
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }
        for (let i = 0; i < testCases.length; i++) {
            program.stdin = testCases[i].input
            let output = await axios.post(
                'https://api.jdoodle.com/v1/execute',
                program
            )
            // console.log(output.data)
            // console.log('saída')
            // console.log(output.data.output.toString())
            // console.log('saída esperada')
            // console.log(testCases[i].expectedOutput.toString())
            if (output.data.output.toString() != testCases[i].expectedOutput.toString()) {
                return 1
            }
        }
        return 0
    } catch (error) {
        console.log(error)
    }

}
const updateAvaliation = async avaliation => {

    try {
        //depende de transação?
        await updateAvaliationState(1, avaliation.avaliation.id, updateStateTransaction) //muda status para running
        var result = await runCode(avaliation.solution, avaliation.testCases) //retorna o resultado da execução
        await updateAvaliationResult(result, avaliation.avaliation.id, t) //altera o resultado da avaliação
        await updateAvaliationState(2, avaliation.avaliation.id, t) //muda status para finished

    } catch (error) {
        console.log(error)
    }
}
const checkAvaliationsToBeDone = async () => {
    for (let i = 0; i < avaliationList.length; i++) {
        if (avaliationList[i].done == false) {
            await updateAvaliation(avaliationList[i])
            avaliationList[i].done = true
        } else {
            avaliationList.splice(i, 1)
        }
    }
}
module.exports = {
    avaliate: (avaliation, solution, testCases) => {
        let avaliationObj = {
            done: false,
            id: uuid(),
            avaliation: avaliation,
            solution: solution,
            testCases: testCases
        }
        avaliationList.push(avaliationObj)
        await checkAvaliationsToBeDone()
    }
}