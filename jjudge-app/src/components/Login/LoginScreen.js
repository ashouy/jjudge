import { CssBaseline, Grid, makeStyles, Slide, Typography, Paper, Box } from '@material-ui/core'
import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: "url('https://source.unsplash.com/random')",

    },
    paper: {
        margin: theme.spacing(8, 4),
        padding: theme.spacing(1, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .8)',
    }
}))

const LoginScreen = () => {
    const classes = useStyles()
    const [haveAccount, setHaveAccount] = useState(true)

    const haveAccountHandler = () => {
        setHaveAccount((prev) => !prev)
    }
    return (
        <Grid
            container
            component='main'
            className={classes.root}
        >
            <CssBaseline />
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper className={classes.paper}>
                    {haveAccount
                        ? <SignUp haveAccountHandler={haveAccountHandler} />
                        : <SignIn haveAccountHandler={haveAccountHandler} />
                    }
                </Paper>
            </Grid>
            <Box
                component={Grid}
                item
                sm={12}
                lg={8}
                display={{ xs: 'none', sm: 'block' }}
            >
                <Paper className={classes.paper}>
                    <Typography>text</Typography>
                </Paper>
            </Box>


        </Grid>
    )
}
export default LoginScreen