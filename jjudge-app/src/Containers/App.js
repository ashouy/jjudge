import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'
import Home from '../components/mainContent/Home'
import Problems from '../components/mainContent/showProblems/Problems'
import Tags from '../components/mainContent/tags/Tags'
import Help from '../components/mainContent/help/Help'
import Avaliations from '../components/mainContent/avaliations/Avaliations'
import CreateProbleScreen from '../components/mainContent/createProblem/CreateProblemScreen'
import CreateSolutionScreen from '../components/mainContent/createSolution/CreateSolutionScreen'

import { BrowserRouter, Route, Router, useLocation } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',

    },
    mainContent: {
        padding: '10px',
        marginTop: '10px',
        maxWidth: '950px',
        margin: 'auto',
        flexGrow: 1,
        borderRadius: '3px',
        border: '1px solid #e1e4e8',
    }

}))
const App = () => {
    const classes = useStyles()
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <Header />
                <Navbar />
                <div className={classes.mainContent} >
                    <Route path='/' exact component={Home} />
                    <Route path='/showProblems' component={Problems} />
                    <Route path='/createProblem' component={CreateProbleScreen} />
                    <Route
                        path='/createSolution/:code'
                        component={CreateSolutionScreen}
                    />
                    <Route path='/avaliations' component={Avaliations} />
                    <Route path='/help' component={Help} />
                    <Route path='/tags' component={Tags} />
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App