import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import ProblemTable from './ProblemsTable';


function createData(title, code, tag, level, rate) {
    return { title, code, tag, level, rate };
}

const problemExp = [
    createData('Frozen yoghurt', 159, 'grafos', 'Fácil', 4.0),
    createData('Icekhagfygafhal', 237, 'arrays', 'Fácil', 4.3),
    createData('Eclair', 262, 'struct', 'Médio', 6.0),
    createData('Cupcake', 305, 'fila', 'Difícil', 4.3),
    createData('Gingerbread', 356, 'pilha', 'Médio', 3.9),
    createData('Gingerbreaaaaad', 356, 'fila', 'Fácil', 3.9),
];



const Problems = props => {
    const [load, setLoad] = useState(false)
    const [problemsData, setProblemsData] = useState([])

    useEffect(() => {
        const axiosReq = async () => {
            setProblemsData(problemExp)
            setLoad(true)
        }
        axiosReq()
    },[])

    if (load) {
        return (
            <ProblemTable problemsData={problemsData}/>
        )

    } else {
        return (<Typography>loading</Typography>)
    }
}

export default Problems