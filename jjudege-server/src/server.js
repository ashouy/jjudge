const app = require('./app')
const cors = require('cors')
const port = 3001
const createSolution = require('./useCases/CreateSolution/createSolutionRoute')
const createProblem = require('./useCases/CreateQuestion/CreateProblemRoute')
const problems = require('./useCases/ShowQuestions/ShowQuestionsRoute')
const bodyParse = require('body-parser')
const CreateTables = require('./entities/CreateTables')
const login = require('./useCases/login/loginRoute')
const Tests = require('./Test/test')

require('dotenv').config()

CreateTables.createTables()


app.use(cors())
app.use(bodyParse.json())
app.use('/createSolution',createSolution )
app.use('/createProblem',createProblem)
app.use('/problems',problems)
app.use('/login',login)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})