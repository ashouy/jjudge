import { Button, Checkbox, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
    }
}))


const TestCasesList = props => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction='column'
            justify='flex-start'
            spacing={2}
        >
            {props.tests.map((test, index) => {
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
                                rows={4}
                                fullWidth
                                multiline
                                variant='outlined'
                                label={test.stdin}
                                disabled
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                rows={4}
                                fullWidth
                                multiline
                                variant='outlined'
                                label={test.stdout}
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
                            <Button
                                onClick={props.onRemove.bind(this, index)}
                                variant='outlined'>
                                Remove
                                 </Button>
                        </Grid>
                    </Grid>
                )
            })

            }
        </Grid>
    )
}

export default TestCasesList