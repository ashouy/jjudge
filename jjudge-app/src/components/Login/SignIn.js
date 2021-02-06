import { Avatar, CssBaseline, Checkbox, Grid, makeStyles, Paper, Typography, TextField, FormControlLabel, Button, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .8)'
    },
    avatar: {
        margin: theme.spacing(1),
        background: theme.palette.secondary.main
    },
    form: {
        width: '90%',
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
        <Grid item xs={12} sm={8} md={5} elevation={6}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>

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

                    <Grid container >
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
                                
                            >
                                Don't haveAccount an account?
                            </Link>
                        </Grid>

                    </Grid>
                </form>

            </Paper>
 
        </Grid>
    )
}

export default SignIn