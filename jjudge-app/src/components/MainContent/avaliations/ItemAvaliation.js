import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    },
    white: {
        backgroundColor: 'white'
    }
}))




const ItemAvaliation = props => {
    const classes = useStyles()
    /**
     * avaliations
     * Avaliation={
     *  id:
     *  idSolution:
     *  problemTitle:
     *  status: 0, 1, 2 
     *  result: 0, 1
     * }
     */

    const statustHandler = statusCode => {
        if (statusCode == 2) {
            return (
                <Avatar className={classes.white}>
                    <CheckCircleOutlineIcon />
                </Avatar>
            )
        } else {
            return (
                <Avatar className={classes.white}>
                    <ErrorOutlineIcon />
                </Avatar>
            )
        }
    }

    return (
        <Grid className={classes.root} container direction='column' spacing={1}>
            {props.avaliations.map(avaliation => {
                return (
                    <Grid item key={avaliation.id}>
                        <Paper className={classes.paper}>
                            <Grid container justify='space-between' alignItems='center'>
                                <Grid item >
                                    <Typography>
                                        {avaliation.id}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {avaliation.problemTitle}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {statustHandler(avaliation.status)}
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {avaliation.result}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ItemAvaliation