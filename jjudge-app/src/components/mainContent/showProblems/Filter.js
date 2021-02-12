import { Grid, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, TextField } from '@material-ui/core'
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

const options = [
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

    const classes = useStyles()
    const [anchorElTag, setAnchorElTag] = useState(null);
    const [anchorElLevel, setAnchorElLevel] = useState(null);
    const [selectedIndexTag, setSelectedIndexTag] = useState(1);
    const [selectedIndexLevel, setSelectedIndexLevel] = useState(1);

    const handleClickListItemTag = (event) => {
        setAnchorElTag(event.currentTarget);
    };

    const handleMenuItemClickTag = (event, index) => {
        setSelectedIndexTag(index);
        setAnchorElTag(null);
    };
    const handleCloseTag = () => {
        setAnchorElTag(null);
    };

    
    const handleClickListItemLevel = (event) => {
        setAnchorElLevel(event.currentTarget);
    };

    const handleMenuItemClickLevel = (event, index) => {
        setSelectedIndexLevel(index);
        setAnchorElLevel(null);
    };
    const handleCloseLevel = () => {
        setAnchorElLevel(null);
    };
    return (
        <Grid container
            className={classes.root}
            direction='row'
            justify='space-around'
        >
            <Grid item >
                <TextField
                    id='search-by-code-title'
                    label='Título/Código'
                />
            </Grid>
      
            <Grid item>
                <List component="nav" aria-label="Tags">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="tag-list"
                        aria-label="Tag"
                        onClick={handleClickListItemTag}
                    >
                        <ListItemText primary="Tag" secondary={options[selectedIndexTag]} />
                    </ListItem>
                </List>
                <Menu
                    id="tag-list"
                    anchorEl={anchorElTag}
                    keepMounted
                    open={Boolean(anchorElTag)}
                    onClose={handleCloseTag}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        }
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndexTag}
                            onClick={(event) => handleMenuItemClickTag(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>

            </Grid>
            
            <Grid item>
                <List component="nav" aria-label="Levels">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="level-list"
                        aria-label="Level"
                        onClick={handleClickListItemLevel}
                    >
                        <ListItemText primary="Nível" secondary={levelList[selectedIndexLevel]} />
                    </ListItem>
                </List>
                <Menu
                    id="level-list"
                    anchorEl={anchorElLevel}
                    keepMounted
                    open={Boolean(anchorElLevel)}
                    onClose={handleCloseLevel}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        }
                    }}
                >
                    {levelList.map((level, index) => (
                        <MenuItem
                            key={level}
                            selected={index === selectedIndexLevel}
                            onClick={(event) => handleMenuItemClickLevel(event, index)}
                        >
                            {level}
                        </MenuItem>
                    ))}
                </Menu>

            </Grid>
        </Grid>
    )
}

export default Filter
