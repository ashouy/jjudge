import { CssBaseline, Grid, makeStyles, Slide, Typography, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: "url('https://source.unsplash.com/random')"
    },
    paper: {
        margin: theme.spacing(8, 4),
        padding: theme.spacing(1, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .8)'
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
            direction='row-reverse'
            alignItems='center'
        >
            <CssBaseline />
            <Grid item>
                <Slide direction='right' in={haveAccount} mountOnEnter unmountOnExit>
                    <Paper className={classes.paper}>
                        <SignIn haveAccountHandler={haveAccountHandler} />
                    </Paper>
                </Slide>

                <Slide direction='right' in={!haveAccount} mountOnEnter unmountOnExit>
                    <Paper className={classes.paper}>
                        <SignUp haveAccountHandler={haveAccountHandler} />
                    </Paper>
                </Slide>

            </Grid>

        </Grid>
    )
}
export default LoginScreen