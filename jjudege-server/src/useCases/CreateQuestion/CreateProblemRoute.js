const express = require('express')
const router = express.Router()
const { saveProblem } = require('./CreateProblemPercistence')
const ProblemDTO = require('./ProblemDTO').default
const TestCaseDTO = require('./TestCaseDTO').default

router.post('/', async (req, res) => {

    try {
        const problem = new ProblemDTO(
            req.body.title,
            req.body.enunciated,
            req.body.level,
            req.body.rate,
            req.body.tag,
            req.body.userId,
            )


        const testCases = new TestCaseDTO(req.body.testcases)

        await saveProblem(problem, testCases)

        res.status(200).send("problem saved")
    } catch (err) {
        console.log(err)
        res.status(404).send("can't save")
    }
})

module.exports = router