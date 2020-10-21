import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core'


const Result  = props =>{
    const [load, setLoad] = useState(false)
    const [output, setOutput] = useState()

    useEffect(() =>{

    },[])

    return(
        <Typography>
            {output}
        </Typography>
    )

}

export default Result
