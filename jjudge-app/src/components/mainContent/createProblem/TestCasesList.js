import { Button, Checkbox, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
    }
}))

function createData(name, stdin, expectStdout, visibility) {
    return { name, stdin, expectStdout, visibility }
}

const tests = [
    createData('mult ab', ' a /nb', 'c', true),
    createData('mult ab', ' a /nb', 'c', false),
    createData('mult ab', ' a /nb', 'c', true),
    createData('mult ab', ' a /nb', 'c', false),
]

const TestCasesList = props => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction='column'
            justify='flex-start'
            spacing={2}
        >
            {tests.map((test, index) => {
                return (
                    <Grid
                        key={index}
                        container
                        direction='column'
                        justify='flex-start'
                        alignItems='stretch'
                        className={classes.root}
                        >
                        <Grid item>
                            <Typography>{test.name}</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                multiline
                                variant='outlined'
                                label={test.stdin}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                multiline
                                variant='outlined'
                                label={test.expectStdout}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={test.visibility}
                                        name='visibilityBtn'
                                        color='primary'
                                        disabled
                                    />
                                }
                                label='Visível'
                            />
                        </Grid>
                        <Grid item>
                            <Button variant='outlined'>Remove</Button>
                        </Grid>
                    </Grid>
                )
            })

            }
        </Grid>
    )
}

export default TestCasesList