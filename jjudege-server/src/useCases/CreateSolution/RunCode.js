const request = require('request')


module.exports = {
    runCode: async (program, url) => {
        request.post({
            url: url,
            method: 'POST',
            program: program
        })
            .on('data', data => {
                return data
            })
    }
}