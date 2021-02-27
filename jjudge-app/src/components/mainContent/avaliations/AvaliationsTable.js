import { Paper } from '@material-ui/core'
import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import AvaliationsFilter from './AvaliationsFilter';

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

const AvaliationsTable = props => {
    const classes = useStyles()

    const { avaliationsData } = props
    const [avaliationsToShow, setAvaliationsToShow] = useState(avaliationsData)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, avaliationsToShow.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }

    const filter = (result, status, title) => {
        setAvaliationsToShow(
            avaliationsData.filter((avaliation) => {
                return (
                    (avaliation.result.toUpperCase().includes(result) === true &&
                        avaliation.status.toUpperCase().includes(status) === true) &&
                    avaliation.title.toUpperCase().includes(title) === true
                )
            })
        )
    }

    return (
        <Paper className={classes.paper}>
            <TableContainer component={'div'} className={classes.root}>
                <AvaliationsFilter changeFilter={filter} />
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
                            ? avaliationsToShow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : avaliationsToShow
                        ).map((row, index) => {
                            return (
                                <TableRow

                                    key={index}
                                >
                                    <TableCell component="th" scope="row" >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="center">{row.result}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
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
                </Table>
            </TableContainer>
            <TablePagination
                align='right'
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                component='div'
                // colSpan={3}
                count={avaliationsToShow.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )

}

export default AvaliationsTable