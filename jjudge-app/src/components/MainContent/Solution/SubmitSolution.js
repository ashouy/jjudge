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
    const [load, setLoad] = useState(false)
    const [visibleTestCases, setVisibleTestCases] = useState([])
    const id = props.location.state //props
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:3001/createSolution/visibleTestCases/${id.id}`,
            headers: {'x-access-token': token}
        })
        .then(res =>{
            console.log(res.data)
            setVisibleTestCases(res.data)
        })
    }, [])
    useEffect(() => {
        if (token == null) {
            window.location.replace('/')
        } else if (id === undefined) {
            
            window.location.replace('/problems')
        }
        axios({
            method: 'get',
            url: `http://localhost:3001/createSolution/problemToSolution/${id.id}`,
            headers: { 'x-access-token': token }
        })
            .then(res => {
                console.log(res.data)
                setProblem(res.data)
                setLoad(true)
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('auth')
                window.location.replace('/')
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
                    <Grid item xs={12} >
                        <Problem title={problem.title} enunciated={problem.enunciated} visibleTestCases={visibleTestCases} />
                    </Grid>
                    <Grid item xs={12} >
                        <Solution questionId={problem.id} userId={userId} problemTitle={problem.title} testCasesInputs={visibleTestCases} />
                    </Grid>
                </Grid>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default SubmitSolution