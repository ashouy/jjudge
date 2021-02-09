import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    header: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        backgroundColor: '#f1f1f1',
        position: 'sticky',
        position: 'webkit-sticky',
        top: '0'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))
const Navbar = () => {
    const classes = useStyle()

    return (
        <AppBar position='sticky'>
            <Toolbar variant='dense'>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar