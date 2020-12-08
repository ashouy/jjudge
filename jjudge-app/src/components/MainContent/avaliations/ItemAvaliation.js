import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Result from './Result'
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
                                    {avaliation.status}
                                </Grid>
                                <Grid item>
                                    <Result resultCode={avaliation.result}/>
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