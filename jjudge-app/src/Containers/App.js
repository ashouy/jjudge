import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Screen from '../components/MainContent/submitSolution/SubmitScreen'
import classes from './App.module.css'
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="app-div" className={classes.App}>
                    <Header />
                    <div id="main-content-div" className={classes.MainContent}>
                        <Route path="/" exact component={Home} />
                        <Route path="/submitSolution" component={Screen} />
                    </div>
                </div>
            </BrowserRouter>

        )
    }
}

export default App