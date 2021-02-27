import { FormControl, Grid, InputLabel, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, Select, TextField } from '@material-ui/core'
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
    'Muito Fácil',
    'Fácil',
    'Médio',
    'Difícil',
    'Muito difícil',
];

const Filter = props => {
    const { changeFilter } = props
    const classes = useStyles()
    const [level, setLevel] = useState('')
    const [tag, setTag] = useState('')

    const changeLevelHandler = event => {
        setLevel(event.target.value)
    }
    const changeTagHandler = event => {
        setTag(event.target.value)
    }
    const titleCodeHandler = event =>{
        changeFilter(event.target.value.toUpperCase())
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
                            tagOpt.map((tag, index) =>(
                                <MenuItem key={index} value={tag} >{tag}</MenuItem>
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
                            levelList.map((level, index) =>(
                                <MenuItem key={index} value={level} >{level}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Filter
