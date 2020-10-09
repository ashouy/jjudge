import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Solution from './Solution'
import Problem from './Problem'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

}))



const SubmitSolution = props => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid
                justify='center'
                className={classes.grid}
                container spacing={2}
            >
                <Grid item xs >
                    <Problem enunciated="{Enunciated}"/>
                </Grid>
                <Grid item xs >
                    <Solution />
                </Grid>
            </Grid>
        </div>
    )
}

export default SubmitSolution