import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Solution from './Solution'
import Problem from './Problem'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

}))


const SubmitSolution = props => {

    const classes = useStyles()


    const [problem, setProblem] = useState([])
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)
    const id = props.location.state

    useEffect(() => {
        axios.get(`http://localhost:3001/createSolution/problemToSolution/${id.id}`) // props.id
            .then(res => {
                console.log(res.data)
                setProblem(res.data)
                setLoad(true)
            })
            .catch(err => {
                setError(err)
                setLoad(true)
            })
    }, [])


    if (load) {
        return (
            <div className={classes.root}>
                <Grid
                    justify='center'
                    className={classes.grid}
                    container spacing={2}
                >
                    <Grid item xs >
                        <Problem title={problem.title} enunciated={problem.enunciated}/>
                    </Grid>
                    <Grid item xs >
                        <Solution questionId={problem.id} />
                    </Grid>
                </Grid>
            </div>
        )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default SubmitSolution