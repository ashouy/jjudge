import { Grid, makeStyles, TextField, Paper, Avatar, Typography, Button, Link, CssBaseline } from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
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

const SignUp = props => {
    const classes = useStyles()

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            spacing={2}
        >
            <CssBaseline />
            <Grid item>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
            </Grid>
            <Grid item>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
            </Grid>
            <Grid item>
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
                </form>
            </Grid>
            <Grid item>
                <Grid container alignItems='stretch'>
                    <Grid item >
                        <Link
                            component='button'
                            variant='body2'
                            onClick={props.haveAccountHandler.bind(this)}
                        >
                            Alredy have an account
                            </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignUp