import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import axios from 'axios'
import ItemProblem from './ItemProblem'
const ShowProblemsScreen = props => {
    const [load, setLoad] = useState(false)
    const [problems, setProblems] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3001/problems')
            .then(res => {
                setProblems(res.data)
                setLoad(true)
            })
            .catch(err => {
                setError(err)
                setLoad(true)
            })
    },[])
    if (load) {
        return (
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography>
                        Problems
                    </Typography>
                </Grid>
                <Grid item>
                    <ItemProblem problemsData={problems}/>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <div>
                <Typography>
                    loading
                </Typography>
            </div>
        )
    }
}

export default ShowProblemsScreen