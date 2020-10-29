import { Grid, makeStyles, Paper, TextField, Typography, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import React, { useState } from 'react'
import TestCases from './TestCases'
import TestCase from './TestCases'

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
    const [isInvisible, setIsInvisible] = useState(false)
    const classes = useStyles()
    const [addedTestCases, setAddedTestCases] = useState([])
    
    const addTestCaseHandler = () => {       
        setAddedTestCases(prevAddedTestCases =>
            [...prevAddedTestCases,
            {
                id: Math.random().toString,
                title: testName,
                input: input,
                expected: expectedOutput,
                isInvisible: isInvisible
            }]
        )
    }

    const isInvisibleHandler = event =>{
        setIsInvisible(event.target.value)
    }
    const testNameHandler = event =>{
        setTestName(event.target.value)
    }
    const expectedOutputHandler = event =>{
        setExpectedOutput(event.target.value)
    }

    const inputHandler = event =>{
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
                            <TextField label="Title" />
                        </Grid>
                        <Grid item >
                            <TextField
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

                    <Grid container className={classes.root} spacing={2}>
                        <Grid item>
                            <TextField label="Name"></TextField>
                        </Grid>
                        <Grid item>
                            <TextField label="Input" multiline variant='outlined'></TextField>
                        </Grid>
                        <Grid item>
                            <TextField label="Expected Output" multiline variant='outlined'></TextField>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox name="checkInv" color='primary'/>}
                                label="Invisible?"
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
                    <Typography>Added Test Cases</Typography>
                    <Grid className={classes.root} container >
                        <TestCases listTestCases={addedTestCases} />
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Grid container justify='center'>
                    <Button variant='contained' color='primary'>Save</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateProblem