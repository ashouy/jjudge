import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Solution from './Solution'
import Problem from './Problem'
import React, {useEffect} from 'react'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

}))


const SubmitSolution = props => {

    const classes = useStyles()

    useEffect(async () =>{
        const problem =  await axios.get()
    })


    return (
        <div className={classes.root}>
            <Grid
                justify='center'
                className={classes.grid}
                container spacing={2}
            >
                <Grid item xs >
                    <Problem enunciated="{Enunciated}" description="problem's description here"/>
                </Grid>
                <Grid item xs >
                    <Solution questionId={}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default SubmitSolution