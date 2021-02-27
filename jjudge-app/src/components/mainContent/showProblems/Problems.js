import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Typography } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination'
import Filter from './Filter';
import { Link } from 'react-router-dom';
import ProblemTable from './ProblemsTable';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        border: '1px solid black',
        marginTop: '2px'
    },
    filter: {
        border: '1px solid black'
    },
    root: {
        flexGrow: 1

    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    }
}))

function createData(title, code, tag, level, rate) {
    return { title, code, tag, level, rate };
}

const problemExp = [
    createData('Frozen yoghurt', 159, 'grafos', 24, 4.0),
    createData('Icekhagfygafhal', 237, 'arrays', 37, 4.3),
    createData('Eclair', 262, 'struct', 24, 6.0),
    createData('Cupcake', 305, 'fila', 67, 4.3),
    createData('Gingerbread', 356, 'pilha', 49, 3.9),
    createData('Gingerbreaaaaad', 356, 'fila', 49, 3.9),
];



const Problems = props => {
    const [load, setLoad] = useState(false)
    const [problemsData, setProblemsData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        const axiosReq = async () => {
            setProblemsData(problemExp)
            setLoad(true)
        }
        axiosReq()
    })

    if (load) {
        return (
            <ProblemTable problemsData={problemsData}/>
        )

    } else {
        return (<Typography>loading</Typography>)
    }
}

export default Problems