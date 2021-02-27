import { IconButton, Link, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
import Filter from './Filter'
import SearchIcon from '@material-ui/icons/Search'
import InfoIcon from '@material-ui/icons/Info'
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

const ProblemTable = props => {
    const classes = useStyles()

    const { problemsData } = props
    const [problemsToShow, setProblemsToShow] = useState(problemsData)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, problemsToShow.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }
    const filter = (title_code, tag, level) => {
        setProblemsToShow(
            problemsData.filter((problem) => {
                return (
                    (problem.title.toUpperCase().includes(title_code) === true &&
                        problem.tag.toUpperCase().includes(tag) === true) &&
                    problem.level.toUpperCase().includes(level) === true
                )
            })
        )
        console.log(problemsToShow)
    }

    return (
        <Paper className={classes.paper}>
            <TableContainer component={'div'} className={classes.root}>
                <Filter
                    changeFilter={filter}
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
}

export default ProblemTable