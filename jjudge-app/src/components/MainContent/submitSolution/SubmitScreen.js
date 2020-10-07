import React, { Component } from 'react'
import classes from './Screen.module.css'
import Enunciated from './Enunciated'
import axios from 'axios'
import Result from './Result'

class SubmitScreen extends Component {
    state = {
        result: 'aaa',
        solution: ''
    }


    submitSolutionHandler = () => {
        const post = {
            
        }
        axios.post("http://localhost:3001/createSolution", post)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div id="submit-div" className={classes.submit_div}>
                <div id="main-row-div" className={classes.main_row}>
                    <div id="enunciated-div" className={classes.column.enun} style={{ backgroundColor: "cadetblue" }}>
                        <Enunciated enunciated="enunciado" />
                    </div>
                    <div id="plain-cod-div" className={classes.column.cod} style={{ backgroundColor: "aquamarine", paddingTop: "15px" }}>
                        <textarea className={classes.code} placeholder="enter code here"></textarea>
                        <hr />
                    </div>
                    <button onClick={this.submitSolutionHandler}>result</button>
                    <Result result= {this.state.result}/>                    
                </div>

            </div>
        )
    }
}

export default SubmitScreen