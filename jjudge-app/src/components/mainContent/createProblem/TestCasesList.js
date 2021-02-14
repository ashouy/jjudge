import { Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

function createData(name, stdin, expectStdout) {
    return { name, stdin, expectStdout }
}

const tests = [
    createData('mult ab', ' a /nb', 'c'),
    createData('mult ab', ' a /nb', 'c'),
    createData('mult ab', ' a /nb', 'c'),
    createData('mult ab', ' a /nb', 'c'),
]

const TestCasesList = props => {

    return (
        <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
        >
            {tests.map((test) => (
                <Grid item>
                    <TextField label={test.name} />
                </Grid>
            ))

            }
        </Grid>
    )
}

export default TestCasesList