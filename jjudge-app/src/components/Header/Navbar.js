import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '5px',
        margin: 'auto',
        maxWidth: '950px',
        marginTop: '5px',
        border: '1px solid black',
    },
    ul: {
        listStyleType: 'none',
        overflow: 'auto',
        margin: '2px',
        padding: '0',
        whiteSpace: 'nowrap'
    },
    li: {
        display: 'inline',
        float: 'left',
    },


}));

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const menuId = 'create-menu';

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleCreateMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            <MenuItem
                onClick={handleMenuClose}
            >
                <Link
                    to='/createProblem'
                    style={{ textDecoration: 'none' }}
                >
                    Problem
                </Link>
            </MenuItem>
            <MenuItem
                onClick={handleMenuClose}
            >
                <Link
                    to='/createSolution'
                    style={{ textDecoration: 'none' }}
                >
                    Solution
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <ul className={classes.ul}>

                <li
                    className={classes.li}>

                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <Button variant='outlined' color='primary'>Home</Button>
                    </Link>
                </li>
                <li
                    className={classes.li}>
                    <Link to='/showProblems' style={{ textDecoration: 'none' }} >
                        <Button variant='outlined' color='primary'>Problems</Button>
                    </Link>
                </li>
                <li
                    className={classes.li}>
                    <Link to='/avaliations' style={{ textDecoration: 'none' }} >
                        <Button variant='outlined' color='primary'>Avaliations</Button>
                    </Link>
                </li>
                <li
                    className={classes.li}>
                    <Button
                        aria-controls={menuId}
                        variant='outlined'
                        color='primary'
                        aria-haspopup='true'
                        onClick={handleCreateMenuOpen}
                    >
                        Create
                    </Button>
                </li>
                <li
                    className={classes.li}>
                    <Link to='/help' style={{ textDecoration: 'none' }} >
                        <Button variant='outlined' color='primary'>Help</Button>
                    </Link>
                </li>
            </ul>
            <div style={{ clear: 'both' }} ></div>
            {renderMenu}
        </div>
    );
}

export default Navbar