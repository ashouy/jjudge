import { Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Grid, TableFooter } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';
import AvaliationsFilter from './AvaliationsFilter';

const useStyles = makeStyles({
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

    }
});

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Icekhagfygafhal', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
    createData('Gingerbreaaaaad', 356, 16.0),
];


const Avaliations = props => {

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={'div'} className={classes.root}>
            <AvaliationsFilter/>
            <Table className={classes.table} aria-label="simple table" size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Título</TableCell>
                        <TableCell align='center'>Status</TableCell>
                        <TableCell align="center">Resultado</TableCell>
                        <TableCell align="right">Mensagem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => {
                        return (
                            <TableRow

                                key={row.name}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align='right'>
                                    <IconButton size='small'>
                                        <SearchIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter >
                    <TableRow>
                        <TablePagination
                            align='right'
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            component='div'
                            // colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default Avaliations