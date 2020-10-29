import { Checkbox, FormControlLabel, Grid, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    control: {
        padding: theme.spacing(2),
    },
}));

const TestCases = props => {
    const classes = useStyles()

    return (
        <Grid className={classes.root} container spacing={2} direction='column'>
            {props.listTestCases.map(testCase => {
                return (
                    <Grid item key={testCase.id}>
                        <Grid container  spacing={2} alignItems='center' justify='space-between'>
                            <Grid item >
                                <Typography>{testCase.title}</Typography>
                            </Grid>
                            <Grid item >
                                <Typography>{testCase.input}</Typography>
                            </Grid>
                            <Grid item >
                                <Typography>{testCase.expected}</Typography>
                            </Grid>
                            <Grid item >
                                <FormControlLabel
                                    control={<Checkbox name="checkInv2" color='primary' checked={testCase.isInvisible} />}
                                    label="Invisible?"
                                />
                            </Grid>
                            <Grid item >
                                <Button variant='contained' color='secondary' onClick={props.onRemoveItem.bind(this,testCase.id)}>Remove</Button>
                            </Grid>

                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default TestCases