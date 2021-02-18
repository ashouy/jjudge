import { Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    testCases: {
        border: '1px solid #e1e4e8',
        borderRadius: '3px',
        backgroundColor: '#f1f2f4',
    }
}))

function create(name, stdin, expectedStdoutput,) {
    return { name, stdin, expectedStdoutput }
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
s            justify='flex-start'
            alignItems='stretch'
            className={classes.root}
            spacing={2}
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
                                <Typography>{test.name}</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    disabled
                                    defaultValue={test.stdin}
                                    label='stdin'
                                    />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    disabled
                                    defaultValue={test.expectedStdoutput}
                                    label='expected stdout'
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