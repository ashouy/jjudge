import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react'
import Register from './Register';
import axios from 'axios'
import jwt from 'jwt-decode'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const SignIn = props => {
    const classes = useStyles()
    const [isAuth, setIsAuth] = useState(false)
    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    const changePasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const authHandler = () => {
        try {
            const data = {
                email: email,
                password: password
            }
            axios.post(`http://localhost:3001/login/signIn`, data)
                .then(res => {
                    const token = res.data.token
                    const user = jwt(token)
                    console.log(user)
                    localStorage.setItem('userId',user.userId)
                    localStorage.setItem('userName',user.userName)
                    localStorage.setItem('auth',true)
                    localStorage.setItem('token',token)
                    localStorage.setItem('admin',user.userAdmin)
                    setIsAuth(true)
                    props.verifyAuth()
                })
                .catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log(error)
        }
        console.log(isAuth)
    }
    const registerHandler = () => { //just to switch forms
        setRegister(!register)
    }

    return (
        register 
            ?
            <Register register={registerHandler} />
            :
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                 </Typography>
                    <TextField
                        onChange={changeEmailHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={changePasswordHandler}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        onClick={authHandler}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link onClick={registerHandler} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                </div>
            </Container>

    )

}

export default SignIn