import { Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    }
}))

const TestCases = props => {
    /**
        expectedOutput: "a↵"
        input: "a"
        name: "a"
     */

    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction='column' spacing={1}>
            {props.visibleTestCases.map(test => {
                return (
                    <Grid item key={test.id}>
                        <Paper className={classes.paper}>
                            <Grid container justify='space-between' direction='column' spacing={1}>
                                <Grid item>
                                    <Typography>
                                        {test.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label='Input'
                                        multiline
                                        variant='outlined'
                                        value={test.input}
                                        disabled={true}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item>
                                    <TextField
                                        label='Expected Output'
                                        multiline
                                        variant='outlined'
                                        value={test.expectedOutput}
                                        disabled={true}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default TestCases