import { Grid, makeStyles, Paper, TextField, Typography, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import React, { useState } from 'react'
import TestCases from './TestCases'
import axios from 'axios'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    Paper: {
        padding: theme.spacing(2)
    }

}))

const CreateProblem = props => {

    const [testName, setTestName] = useState('')
    const [input, setInput] = useState('')
    const [expectedOutput, setExpectedOutput] = useState('')
    const [visibility, setVisibility] = useState(false)
    const classes = useStyles()
    const [addedTestCases, setAddedTestCases] = useState([])
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [title, setTitle] = useState('')
    const [enunciated, setEnunciated] = useState('')

    const addTestCaseHandler = () => {
        if (testName === '' || input === '' || expectedOutput === '') {
            setError(true)
        } else {
            setAddedTestCases(prevAddedTestCases =>
                [...prevAddedTestCases,
                {
                    id: Math.random(),
                    title: testName,
                    input: input,
                    expected: expectedOutput,
                    visibility: visibility
                }]
            )

            setError(false)
        }
    }
    const removeTestCaseHandler = id => {
        console.log(id)
        setAddedTestCases(prevAddedTestCases =>
            prevAddedTestCases.filter(testCase => testCase.id !== id)
        )
    }
    const saveProblemHandler = () =>{
        if(title === '' || enunciated === ''){
            setError2(true)
        }else{
            const data={
                title: title,
                enunciated: enunciated,
                testcases: addedTestCases
            }
            const token = localStorage.getItem('token')
            axios.post('http://localhost:3001/createProblem', data)
            axios({
                method: 'post',
                url: 'http://localhost:3001/createProblem',
                data:data,
                headers:{'x-access-token':token}
            })
            .then( res=> {
                console.log(res.data)
            })
            .catch(error=> {
                console.log(error)
            })
            setError2(false)
        }
    }

    const changeEnunciatedHandler = event =>{
        setEnunciated(event.target.value)
    }

    const changeTitleHandler = event =>{
        setTitle(event.target.value)
    }

    const visibilityHandler = event => {
        setVisibility(event.target.checked)
    }
    const testNameHandler = event => {
        setTestName(event.target.value)
    }
    const expectedOutputHandler = event => {
        setExpectedOutput(event.target.value)
    }

    const inputHandler = event => {
        setInput(event.target.value)
    }


    return (
        <Grid container className={classes.root}
            direction='column'
            justify='flex-start'
            alignItems='stretch'
            spacing={2}
        >
            <Grid item>
                <Paper className={classes.Paper} xs >
                    <Typography >Create Problem</Typography>
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <TextField error={error2} label="Title" onChange={changeTitleHandler}/>
                        </Grid>
                        <Grid item >
                            <TextField
                                error={error2}
                                onChange={changeEnunciatedHandler}
                                label="Enunciated"
                                multiline
                                fullWidth
                                variant='outlined'
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.Paper}>
                    <Typography>Create Test Cases</Typography>

                    <Grid container className={classes.root} spacing={2} alignItems='center' justify='space-between'>
                        <Grid item>
                            <TextField error={error} label="Name" onChange={testNameHandler}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField error={error} label="Input" multiline variant='outlined' onChange={inputHandler}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField error={error} label="Expected Output" multiline variant='outlined' onChange={expectedOutputHandler}></TextField>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox name="checkInv" color='primary' onChange={visibilityHandler} checked={visibility}/>}
                                label="Visibility"
                            />
                        </Grid>
                        <Grid item >
                            <Button variant='contained' color='primary' onClick={addTestCaseHandler}> ADD</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item >
                <Paper className={classes.Paper}>

                    <TestCases listTestCases={addedTestCases} onRemoveItem={removeTestCaseHandler} />

                </Paper>
            </Grid>
            <Grid item>
                <Grid container justify='center'>
                    <Button variant='contained' color='primary' onClick={saveProblemHandler}>Save</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateProblem