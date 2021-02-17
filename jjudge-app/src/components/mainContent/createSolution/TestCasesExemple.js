import { Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    testCases:{
        border: '1px solid black',
        
    }
}))

function create(name, stdin, expectedStdoutput,) {
    return {name, stdin, expectedStdoutput}
}
const testCases = [
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
    create('divAB', 'stdin exemple', 'stdout exemple'),
]

const TestCasesExemple = props => {

    const classes = useStyles()

    return (
        <Grid
            container
            direction='column'
            spacing={1}
            justify='flex-start'
            alignItems='stretch'
            className={classes.root}
        >
            {
                testCases.map((test, index) => (
                    <Grid key={index} item >
                        <Grid
                            container
                            direction='column'
                            spacing={1}
                            justify='flex-start'
                            alignItems='stretch'
                            className={classes.testCases}

                        >
                            <Grid item >
                                <Typography>Name</Typography>
                                <Divider />
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    disabled
                                    defaultValue={test.name}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Stdin</Typography>
                                <Divider />
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    disabled
                                    defaultValue={test.stdin}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Expected Output</Typography>
                                <Divider />
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    disabled
                                    defaultValue={test.expectedStdoutput}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )

}

export default TestCasesExemple