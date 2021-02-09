import { makeStyles } from '@material-ui/core'
import React from 'react'
import LoginScreen from '../components/Login/LoginScreen'
import Header from './Header'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow: 1,
        width: '100%',
        
    }
}))
const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            {/* <Navbar /> */}
            {/* <LoginScreen /> */}
        </div>
    )
}


export default App