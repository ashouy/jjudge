const app = require('./app')
const cors = require('cors')
const port = 3001
const host = '0.0.0.0'
const createProblem = require('./useCases/CreateProblem/CreateProblemRoute')
const createSolution = require('./useCases/CreateSolution/CreateSolutionRoute')
const problems = require('./useCases/ShowQuestions/ShowQuestionsRoute')
const bodyParse = require('body-parser')
const login = require('./useCases/login/loginRoute')
const avaliations = require('./useCases/ShowAvaliations/ShowAvaliationRoute')
const {startSever} = require('./migrate')

require('dotenv').config()
startSever()

app.use(cors())
app.use(bodyParse.json())
app.use('/createSolution', createSolution)
app.use('/createProblem', createProblem)
app.use('/problems', problems)
app.use('/login', login)
app.use('/avaliations', avaliations)

app.listen()
app.listen(port,host,()=>{
    console.log(port)
})