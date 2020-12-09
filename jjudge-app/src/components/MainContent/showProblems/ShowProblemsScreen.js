import React, { useEffect, useState } from 'react'
import { Grid,  Typography } from '@material-ui/core'
import axios from 'axios'
import ItemProblem from './ItemProblem'
const ShowProblemsScreen = props => {
    const [load, setLoad] = useState(false)
    const [problems, setProblems] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios({
            method: 'get',
            url: 'http://localhost:3001/problems',
            headers: {'x-access-token':token}
        })
            .then(res => {
                setProblems(res.data)
                setLoad(true)
            })
            .catch(err => {
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