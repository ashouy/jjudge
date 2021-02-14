import { Button, Checkbox, Divider, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TestCasesList from './TestCasesList'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))
const CreateProblemScreen = props => {
    const classes = useStyles()
    const [visibility, setVisibility] = useState(false)

    const changeVisibilityHandler = event => {
        setVisibility(event.target.checked)
    }
    return (
        <Grid
            container
            direction='column'
            spacing='2'
            className={classes.root}
        >
            <Grid item>
                <TextField label='Title' />
            </Grid>
            <Grid item>

            </Grid>
            <Grid item>
                <TextField label='Enunciated' />
            </Grid>

            <Grid item>
                <Typography>Test Cases</Typography>
                <Divider />
                <Grid
                    container
                    direction='row'
                    spacing='2'
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item>
                        <TextField label='Name' />
                    </Grid>
                    <Grid item>
                        <TextField label='Stdin' />
                    </Grid>
                    <Grid item>
                        <TextField label='Expected Stdout' />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={visibility}
                                    onChange={changeVisibilityHandler}
                                    name='visibilityBtn'
                                    color='primary'
                                />
                            }
                            label='Visível'
                        />
                    </Grid>
                    <Grid item>
                        <Button variant='outlined'>Add</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <TestCasesList />
            </Grid>
            <Grid item>
                <Typography> Save container</Typography>
            </Grid>
        </Grid>
    )
}

export default CreateProblemScreen