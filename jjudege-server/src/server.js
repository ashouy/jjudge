const app = require('./app')
const cors = require('cors')
const port = 3001
const createSolution = require('./useCases/CreateSolution/createSolutionRoute')
const createProblem = require('./useCases/CreateQuestion/CreateProblemRoute')
const bodyParse = require('body-parser')
const CreateTables = require('./entities/CreateTables')
const Tests = require('./Test/test')

require('dotenv').config()

CreateTables.createTables()


app.use(cors())
app.use(bodyParse.json())
app.use('/createSolution',createSolution )
app.use('/createProblem',createProblem)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})