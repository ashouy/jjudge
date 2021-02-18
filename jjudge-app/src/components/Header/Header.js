import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: '3px',
        margin: 'auto',
        maxWidth: '950px',
        marginTop: '5px',
        padding:'2px',
        border: '1px solid #e1e4e8'
    //    [theme.breakpoints.up(900)]:{
    //         minWidth: '900px',
    //     } 
    },
    grow: {
        flexGrow: 1,
        boxShadow:0
    },

    title: {
        color: 'black',
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
        
    },
    sectionDesktop: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },

}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>

            <div position='static' className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Judge
                    </Typography>
                    <div className={classes.grow}>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                        >
                            <AccountCircle color='primary' fontSize='large' />
                        </IconButton>
                    </div>

                </Toolbar>
            </div>
            {renderMenu}

        </div>
    )
}