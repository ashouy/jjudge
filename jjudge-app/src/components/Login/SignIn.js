import { Avatar, Slide, Zoom, CssBaseline, Checkbox, Grid, makeStyles, Paper, Typography, TextField, FormControlLabel, Button, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        background: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },

}))

const SignIn = props => {
    const classes = useStyles()
    const [remember, setRemember] = useState(false)

    const ChangeRememberHandler = event => {
        setRemember(event.target.checked)
    }

    const forgotPasswordHandler = () => {
        alert('forgot :(')
    }
    return (
        <Zoom
            //direction='right'
            in={true}
            //mountOnEnter
            //unmountOnExit
        >
            <Grid
                container
                direction='column'
                alignItems='center'
                spacing={2}
            >
                <CssBaseline />
                <Grid item >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <Grid item >
                    <Typography component='h1' variant='h5'>
                        Sign in
                </Typography>
                </Grid>
                <Grid item >
                    <form className={classes.form}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='password'
                            label='Password'
                            name='password'
                            autoComplete='current-password'
                            type='password'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='remember'
                                    color='primary'
                                    onChange={ChangeRememberHandler}
                                />
                            }
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                    </form>
                </Grid>
                <Grid item >
                    <Grid container alignItems='stretch'>
                        <Grid item xs={6}>
                            <Link
                                component='button'
                                variant='body2'
                                onClick={forgotPasswordHandler}
                            >
                                Forgot Password?
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link
                                component='button'
                                variant='body2'
                                onClick={props.haveAccountHandler.bind(this)}
                            >
                                Don't haveAccount an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Zoom>
    )
}

export default SignIn