import { Button, Checkbox, FormControlLabel, Grid, makeStyles, TextField } from '@material-ui/core'
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

    return (
        <Grid
            container
            direction='column'
            justify='flex-start'
        >
            {tests.map((test, index) => {
                return (
                    <Grid
                        key={index}
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='center'>
                        <Grid item>
                            <TextField
                                variant='outlined'
                                label={test.name}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant='outlined'
                                label={test.stdin}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <TextField
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