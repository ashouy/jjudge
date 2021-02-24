import { Collapse, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CreateSolutionHeader from './CreateSolutionHeader'
import CreateSolutionPlainText from './CreateSolutionPlainText'
import RunTestCases from './RunTestCases'

import axios from 'axios'
import TestCasesList from '../createProblem/TestCasesList'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

function create(name, stdin, expectedStdoutput,) {
    return { name, stdin, expectedStdoutput }
}
function createLanguage(name, code) {
    return { name, code }
}
const languageList = [
    createLanguage('java', 1),
    createLanguage('java script', 2),
    createLanguage('C++', 3),
    createLanguage('python', 4)
]
const testCasesExp = [
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
]
const problemInfoExp = {
    id: 1,
    title: 'problema 1',
    tag: 2,
    code: 134,
    level: 4,
    rate: 3,
    enunciated: "You have been asked to build a simple encryption program." +
        "This program should be able to send coded messages without someone been" +
        " able to read them. The process is very simple. It is divided into two parts." +
        " First, each uppercase or lowercase letter must be shifted three positions to" +
        "the right, according to the ASCII table: letter 'a' should become letter 'd', letter" +
        " 'y' must become the character '|' and so on. Second, each line must be reversed." +
        " After being reversed, all characters from the half on (truncated) must be moved one" +
        " position to the left in ASCII. In this case, 'b' becomes 'a' and 'a' becomes '`'." +
        " For example, if the resulting word of the first part is 'tesla', the letters 'sla'" +
        " should be moved one position to the left. However, if the resulting word of the first" +
        " part is 't#$A', the letters '$A' are to be displaced."

}

const CreateSolutionScreen = props => {

    const classes = useStyles()
    const { code } = props.match.params
    const [testCases, setTestCases] = useState([])
    const [problemInfo, setProblemInfo] = useState({})
    const [expanded, setExpanded] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(languageList[0])
    const [script, setScript] = useState('')
    const [newSoltution, setNewSolution] = useState(true)

    const selectedLanguageHandler = language =>{
        setSelectedLanguage(language)
    }
    const scriptHandler = script =>{
        setScript(script)
    }
    useEffect(() => {//axios get problem Id with test cases and script if user already have
        const aux = async () => {
            setTestCases(testCasesExp)
            setProblemInfo(problemInfoExp)
        }
        aux()
    }, [])

    const submmitSolution = () =>{
        const solution = {
            problemCode: Number.parseInt(code),
            language: selectedLanguage,
            script: script,
            new: newSoltution
        }
        axios({
            method:'post',
            url:'https://blabla',
            data:solution
            // headers:{"x-access-token": token}
        })
    }
    const runSolution = () =>{
        const solution ={
            script: script,
            language: selectedLanguage,
            testCases: testCases
        }
        axios({
            method:'post',
            url:'https://blablaRun',
            data:solution
        })
        setExpanded(true)
    }


    return (
        <Grid
            container
            spacing={2}
            direction='column'
            justify='flex-start'
            alignItems='stretch'
        >
            <Grid item>
                <CreateSolutionHeader testCases={testCases} problemInfo={problemInfo} />
            </Grid>
            <Grid item>
                <CreateSolutionPlainText
                    changeScript={scriptHandler}
                    script={script}
                    language={selectedLanguage}
                    languageList={languageList}
                    changeLanguage={selectedLanguageHandler}
                    submmitSolution={submmitSolution}
                    runSolution={runSolution}
                />
            </Grid>
            <Grid item>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <RunTestCases />
                </Collapse>
            </Grid>

        </Grid>
    )
}

export default CreateSolutionScreen