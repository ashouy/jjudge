import React, { useState } from 'react'
import clsx from 'clsx';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SubmitSolution from '../components/MainContent/solution/SubmitSolution'
import Home from '../components/MainContent/Home'
import test from '../components/MainContent/test'
import ShowAvaliationsScreen from '../components/MainContent/avaliations/ShowAvaliationsScreen'
import PostAddIcon from '@material-ui/icons/PostAdd';
import CreateProblem from '../components/MainContent/problem/CreateProblem'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ShowProblemsScreen from '../components/MainContent/showProblems/ShowProblemsScreen'
import SignIn from '../components/Login/SignIn'
import {red} from '@material-ui/core/colors'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#f5f5f5'
    },
}));


const ListItemLink = (props) => {
    const { icon, primary, to } = props;
    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link ref={ref} to={to} {...linkProps} />
            )),
        [to],
    )
    return (
        <li>
            <ListItem button component={CustomLink} key={primary}>
                <ListItem>{icon}</ListItem>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    )
}

const App = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [auth, setAuth] = useState(() => {
        return (
            localStorage.getItem('auth') === null ?
                false
                :
                true
        )
    })

    const authHandler = () => {
        const aux = localStorage.getItem('auth')
        if (aux != null) {
            setAuth(aux)
        } else {
            setAuth(false)
        }
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const exitAppHandler = async () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        window.location.reload()
        window.location.replace('/')
    }
    console.log(localStorage.getItem('auth'))
    console.log(auth)
    return (
        auth ?
            <BrowserRouter>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                JJudge
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
                            <ListItemLink to="/createProblem" primary="Criar Problema" icon={<PostAddIcon />} />
                            <ListItemLink to="/problems" primary="Problemas" icon={<FormatListBulletedIcon />} />
                            <ListItemLink to="/avaliations" primary="Avaliações" icon={<FormatListBulletedIcon />} />
                            <IconButton onClick={exitAppHandler} aria-label='Log-Out'>
                                <ExitToAppIcon style={{color: red[500]}}/>
                            </IconButton>

                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/createProblem" exact component={CreateProblem}></Route>
                        <Route path="/problems" exact component={ShowProblemsScreen}></Route>
                        <Route path="/submitSolution" exact component={SubmitSolution}></Route>
                        <Route path="/avaliations" exact component={ShowAvaliationsScreen}></Route>
                        <Route path="/test" exact component={test}></Route>

                    </main>
                </div>
            </BrowserRouter>
            :
            <SignIn verifyAuth={authHandler} />
    )
}


export default App