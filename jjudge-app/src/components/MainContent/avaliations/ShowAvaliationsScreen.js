import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core'
const ShowAvaliationsScreen = props => {
    const [load, setLoad] = useState(false)
    const [avaliations, setavaliations] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/avaliations')
            .then(res => {
                setavaliations(res.data)
                setLoad(true)
                /**
                 * Avaliation={
                 *  id:
                 *  id_solução:
                 *  estado: 0, 1, 2 
                 *  resultado: 0, 1
                 * }
                 */
            })
            .catch(err => {
                setLoad(true)
                console.log(err)
            })
    },[])

    if(load){
        return(
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography>
                        Avaliations
                    </Typography>
                </Grid>
                <Grid item>
                    <ItemAvaliation/>
                </Grid>
            </Grid>
        )
    }else{
        return(
            <div>
                <Typography>loading</Typography>
            </div>
        )
    }

}
export default ShowAvaliationsScreen
