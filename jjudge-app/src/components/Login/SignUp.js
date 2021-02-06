import { Grid, makeStyles, TextField, Paper, Avatar, Typography, Button, Link, CssBaseline } from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
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

const SignUp = props => {
    const classes = useStyles()

    return (
        
        <Grid item xs={12} sm={8} md={5} elevation={6}>
        <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>

                <form className={classes.form}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
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
                        required
                        fullWidth
                        id='name'
                        label='Name'
                        name='name'
                        autoComplete='name'
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
                    <TextField
                        variant='outlined'
                        margin='normal'
                        fullWidth
                        id='cpassword'
                        label='Confirm Password'
                        name='cpassword'
                        autoComplete='current-password'
                        type='cpassword'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>

                    <Grid container >
                        <Grid item xs>
                            <Link
                                component='button'
                                variant='body2'
                                onClick={props.haveAccountHandler.bind(this)}
                            >
                                Alredy have an account
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp