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
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';
import Filter from './Filter';
import { Link } from 'react-router-dom';

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
    createData('Gingerbread', 356,'pilha', 49, 3.9),
    createData('Gingerbreaaaaad', 356, 'fila', 49, 3.9),
];



const Problems = props => {
    const [load, setLoad] = useState(false)
    const [problemsToShow, setProblemsToShow] = useState([])
    const [problemsData, setProblemsData] = useState([])
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, problemExp.length - page * rowsPerPage);

    useEffect(() => {
        const axiosReq = async () => {
            setProblemsData(problemExp)
            setLoad(true)
        }
        axiosReq()
    })

    const findTitleCodeHandler = searchStr => {
        setProblemsToShow(problemsData.filter(
            (problem) => {
                return (problem.title.toUpperCase().includes(searchStr) == true ||
                    problem.code.toString().includes(searchStr)) == true
            }
        ))
    }
    const findTagHandler = searchStr => {
        setProblemsToShow(problemsData.filter(
            (problem) => {
                return problem.tag.toUpperCase().includes(searchStr)
            }
        ))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    if (load) {
        return (

            <Paper className={classes.paper}>
                <TableContainer component={'div'} className={classes.root}>
                    <Filter
                     changeTitleCode={findTitleCodeHandler}
                     changeTag={findTagHandler}
                     />
                    <Table className={classes.table} aria-label="simple table" size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>Title</TableCell>
                                <TableCell />
                                <TableCell align='left'>Info</TableCell>
                                <TableCell align="right">Code</TableCell>
                                <TableCell align="right">Tag</TableCell>
                                <TableCell align="right">Level</TableCell>
                                <TableCell align="right">Rate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? problemsToShow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : problemsToShow
                            ).map((row, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                    >
                                        <TableCell component="th" scope="row" >
                                            {row.title}
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/createSolution/${problemsToShow.indexOf(row)}`} >
                                                <IconButton size='small'>
                                                    <SearchIcon />
                                                </IconButton>
                                            </Link>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <IconButton >
                                                <InfoIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right">{row.code}</TableCell>
                                        <TableCell align="right">{row.tag}</TableCell>
                                        <TableCell align="right">{row.level}</TableCell>
                                        <TableCell align="right">{row.rate}</TableCell>
                                    </TableRow>
                                )
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    component='div'
                    // colSpan={3}
                    count={problemsToShow.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        )
    } else {
        return (<Typography>loading</Typography>)
    }
}

export default Problems