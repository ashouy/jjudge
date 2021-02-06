import { CssBaseline, Grid, makeStyles, Slide, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: "url('https://source.unsplash.com/random')"
    },
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

            <Slide direction='right' in={haveAccount} mountOnEnter unmountOnExit>
                <div>
                    <SignIn haveAccountHandler={haveAccountHandler} />
                </div>
            </Slide>

            <Slide direction='right' in={!haveAccount} mountOnEnter unmountOnExit>
                <div>
                    <SignUp haveAccountHandler={haveAccountHandler} />
                </div>
            </Slide>

        </Grid>
    )
}
export default LoginScreen