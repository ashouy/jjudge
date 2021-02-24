import { Collapse, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CreateSolutionHeader from './CreateSolutionHeader'
import CreateSolutionPlainText from './CreateSolutionPlainText'
import RunTestCases from './RunTestCases'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root:{

    }
}))

function create(name, stdin, expectedStdoutput,) {
    return { name, stdin, expectedStdoutput }
}
const testCasesExp = [
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
]
const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
}
const CreateSolutionScreen = props => {
    const classes = useStyles()
    const [testCases, setTestCases] = useState([])
    const [expanded, setExpanded] = useState(false)
    const {id} = props.match.params
    const {title} = props.match.params
    const query = useQuery()
    console.log(query.get('id'))
    console.log(query.get('title'))
    console.log(query.get('level'))

    useEffect(() =>{
        const a = async () =>{
            setTestCases(testCasesExp)
        }
        a()
    },[])

    const expandedHandler = () =>{
        setExpanded(prev => !prev)
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
                    <CreateSolutionHeader testCases={testCases}/>
                </Grid>
                <Grid item>
                    <CreateSolutionPlainText runClick={expandedHandler}/>
                </Grid>
                <Grid item>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <RunTestCases/>
                    </Collapse>
                </Grid>

        </Grid>
    )
}

export default CreateSolutionScreen