import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


import AvaliationsTable from './AvaliationsTable';



function createData(title, result, status) {
    return { title, result, status };
}

const avaliationsExp = [
    createData('Frozen yoghurt', 'Correta', 'Finalizada'),
    createData('Icekhagfygafhal', 'Correta', 'Finalizada'),
    createData('Eclair', 'Errada', 'Finalizada'),
    createData('Cupcake', 'Errada', 'Aguardando'),
    createData('Gingerbread', 'Correta', 'Finalizada'),
    createData('Gingerbreaaaaad', 'Errada', 'Aguadando'),
];


const Avaliations = props => {
    const [load, setLoad] = useState(false)
    const [avaliationsData, setAvaliationsData] = useState([])

    useEffect(()=>{
        const axiosReq = async () =>{
            setAvaliationsData(avaliationsExp)
            setLoad(true)
        }
        axiosReq()
    })

    if (load) {
        return (
            <AvaliationsTable avaliationsData={avaliationsData} />
        )
    } else {
        return (<Typography>loading</Typography>)
    }
}

export default Avaliations