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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const tagOpt = [
    'todas',
    'grafos',
    'vetores',
    'arrays',
    'struct',
    'matriz',
    'programação funcional',
    'pilha',
    'fila',
];


const levelList = [
    'todos',
    'Fácil',
    'Médio',
    'Difícil',
];

const Filter = props => {
    const { changeFilter } = props
    const classes = useStyles()
    const [titleCode, setTitleCode] = useState('')
    const [level, setLevel] = useState('')
    const [tag, setTag] = useState('')
    const [apply, setApply] = useState(true)

    const titleCodeHandler = event => {
        setTitleCode(event.target.value)
        setApply(false)
    }
    const changeLevelHandler = event => {
        setLevel(event.target.value)
        setApply(false)

    }
    const changeTagHandler = event => {
        setTag(event.target.value)
        setApply(false)

    }
    const filterHandler = () => {
        changeFilter(
            titleCode.toUpperCase(),
            tag.toUpperCase(),
            level.toUpperCase()
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
                    onChange={titleCodeHandler}
                    id='search-by-code-title'
                    label='Título/Código'
                />
            </Grid>

            <Grid item>
                <FormControl>
                    <InputLabel>Tags</InputLabel>
                    <Select
                        value={tag}
                        onChange={changeTagHandler}
                        MenuProps={MenuProps}
                    >
                        {
                            tagOpt.map((tag, index) => (
                                tag !== 'todas'
                                    ? <MenuItem key={index} value={tag} >{tag}</MenuItem>
                                    : <MenuItem key={index} value={''} >todas</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl>
                    <InputLabel>Nível</InputLabel>
                    <Select
                        value={level}
                        onChange={changeLevelHandler}
                        MenuProps={MenuProps}
                    >
                        {
                            levelList.map((level, index) => (
                                level !== 'todos'
                                    ? <MenuItem key={index} value={level} >{level}</MenuItem>
                                    :<MenuItem key={index} value={''} >todos</MenuItem>
                                ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button variant='outlined' onClick={filterHandler} disabled={apply}>Aplicar</Button>
            </Grid>
        </Grid>
    )
}

export default Filter
