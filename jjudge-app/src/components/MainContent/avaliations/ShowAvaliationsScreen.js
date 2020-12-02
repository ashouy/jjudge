import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core'
import ItemAvaliation from './ItemAvaliation'
const ShowAvaliationsScreen = props => {
    const [load, setLoad] = useState(false)
    const [avaliations, setavaliations] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:3001/avaliations/${id.id}`) //id do usuário para pegar sua avaliações
            .then(res => {
                console.log('data--->')
                console.log(res.data)
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
                    <ItemAvaliation avaliations={avaliations}/>
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
