import { Grid, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Avaliations from './Avaliations';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid black',
        borderRadius: '4px',
        flexGrow: 1,
        padding: '1px'
    }
}))

const ITEM_HEIGHT = 48;

const result = [
    'Todas',
    'Corretas',
    'Incorretas',
];
const status = [
    'Finalizadas',
    'Aguardando',
];

const AvaliationsFilter = props => {

    const classes = useStyles()
    const [anchorElResult, setAnchorElResult] = useState(null);
    const [selectedIndexResult, setSelectedIndexResult] = useState(0);

    const [anchorElStatus, setAnchorElStatus] = useState(null);
    const [selectedIndexStatus, setSelectedIndexStatus] = useState(1);

    const handleClickListItemResult = (event) => {
        setAnchorElResult(event.currentTarget);
    };

    const handleMenuItemClickTag = (event, index) => {
        setSelectedIndexResult(index);
        setAnchorElResult(null);
    };
    const handleCloseResult = () => {
        setAnchorElResult(null);
    };

    
    const handleClickListItemStatus = (event) => {
        setAnchorElStatus(event.currentTarget);
    };

    const handleMenuItemClickLevel = (event, index) => {
        setSelectedIndexStatus(index);
        setAnchorElStatus(null);
    };
    const handleCloseStatus = () => {
        setAnchorElStatus(null);
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
                <List component="nav" aria-label="Result">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="result-opt"
                        aria-label="result"
                        onClick={handleClickListItemResult}
                    >
                        <ListItemText primary="Resultado" secondary={result[selectedIndexResult]} />
                    </ListItem>
                </List>
                <Menu
                    id="result-opt"
                    anchorEl={anchorElResult}
                    keepMounted
                    open={Boolean(anchorElResult)}
                    onClose={handleCloseResult}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        }
                    }}
                >
                    {result.map((result, index) => (
                        <MenuItem
                            key={result}
                            selected={index === selectedIndexResult}
                            onClick={(event) => handleMenuItemClickTag(event, index)}
                        >
                            {result}
                        </MenuItem>
                    ))}
                </Menu>

            </Grid>
            
            <Grid item>
                <List component="nav" aria-label="Status">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="status-opt"
                        aria-label="status"
                        onClick={handleClickListItemStatus}
                    >
                        <ListItemText primary="Status" secondary={status[selectedIndexStatus]} />
                    </ListItem>
                </List>
                <Menu
                    id="status-opt"
                    anchorEl={anchorElStatus}
                    keepMounted
                    open={Boolean(anchorElStatus)}
                    onClose={handleCloseStatus}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        }
                    }}
                >
                    {status.map((result, index) => (
                        <MenuItem
                            key={result}
                            selected={index === selectedIndexStatus}
                            onClick={(event) => handleMenuItemClickLevel(event, index)}
                        >
                            {result}
                        </MenuItem>
                    ))}
                </Menu>

            </Grid>
        </Grid>
    )
}

export default AvaliationsFilter
