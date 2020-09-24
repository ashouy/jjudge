const app = require('./app')
const port = 3000
const createSolution = require('./useCases/CreateSolution/createSolutionRoute')
const bodyParse = require('body-parser')

app.use(bodyParse.json())
app.use('/createSolution',createSolution )


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})