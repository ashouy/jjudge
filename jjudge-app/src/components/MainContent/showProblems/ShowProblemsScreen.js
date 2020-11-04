import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import axios from 'axios'
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
    })
    if (load) {
        return (
            <div>
                <Typography>
                    {problems}
                </Typography>
            </div>
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