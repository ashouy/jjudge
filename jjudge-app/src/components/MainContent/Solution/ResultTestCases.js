import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))


const ResultTestCases = props => {
    const classes = useStyles()

    return (
        <Grid className={classes.root} container spacing={2} direction='column'>
            {props.resultTestCases.map(result => {
                return (
                    <Grid item key={result.id}>
                        <Grid container spacing={1} alignItems='stretch' direction='column' >
                            <Grid item>
                                <Typography>{result.title}</Typography>
                            </Grid>
                            <Grid item >
                                <Typography>Expected</Typography>
                            </Grid>
                            <Grid item >
                                <TextField
                                    multiline
                                    variant='outlined'
                                    value={result.expected}
                                    disabled={true}
                                >
                                </TextField>
                            </Grid>
                            <Grid item>
                                <Typography>your output</Typography>
                            </Grid>
                            <Grid item >
                                <TextField
                                    multiline
                                    variant='outlined'
                                    value={result.output}
                                    disabled={true}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>)
}

export default ResultTestCases