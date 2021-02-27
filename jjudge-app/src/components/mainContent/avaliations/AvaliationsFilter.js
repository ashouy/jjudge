import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid black',
        borderRadius: '4px',
        flexGrow: 1,
        padding: '1px'
    }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const resultOpt = [
    'Todas',
    'Correta',
    'Errada',
];
const statusOpt = [
    'Todas',
    'Finalizada',
    'Aguardando',
];

const AvaliationsFilter = props => {
    const { changeFilter } = props
    const classes = useStyles()

    const [titleCode, setTitleCode] = useState('')
    const [result, setResult] = useState('')
    const [status, setStatus] = useState('')
    const [apply, setApply] = useState(true)

    const TitleCodeHandler = event => {
        setTitleCode(event.target.value)
        setApply(false)
    }
    const resultHandler = event => {
        setResult(event.target.value)
        setApply(false)
    }
    const statusHandler = event => {
        setStatus(event.target.value)
        setApply(false)
    }

    const filterHandler = () => {
            changeFilter(
                result.toUpperCase(),
                status.toUpperCase(),
                titleCode.toUpperCase()
            )
        setApply(true)
    }

    return (
        <Grid container
            className={classes.root}
            direction='row'
            justify='space-around'
        >
            <Grid item >
                <TextField
                    onChange={TitleCodeHandler}
                    id='search-by-code-title'
                    label='Título/Código'
                />
            </Grid>

            <Grid item>
                <FormControl>
                    <InputLabel>Resultado</InputLabel>
                    <Select
                        value={result}
                        onChange={resultHandler}
                        MenuProps={MenuProps}
                    >
                        {
                            resultOpt.map((result, index) => (
                                result !== 'Todas'
                                    ? <MenuItem key={index} value={result} >{result}</MenuItem>
                                    : <MenuItem key={index} value={''} >todas</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={status}
                        onChange={statusHandler}
                        MenuProps={MenuProps}
                    >
                        {
                            statusOpt.map((status, index) => (
                                status !== 'Todas'
                                    ? <MenuItem key={index} value={status} >{status}</MenuItem>
                                    : <MenuItem key={index} value={''} >todas</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button
                    variant='outlined'
                    disabled={apply}
                    onClick={filterHandler}
                >
                    Aplicar
                    </Button>
            </Grid>
        </Grid>
    )
}

export default AvaliationsFilter
