import React from 'react'
import classes from './Header.module.css'
import {Link}from 'react-router-dom'
import HeaderItem from './HeaderItem'

const header = () => {
    return (
        <div className={classes.Header}>
            <ul className={classes.ul}>
                <li><Link to="/"><HeaderItem itemName="Home"/></Link></li>
                <li><Link to="submitSolution"><HeaderItem itemName="Submit Solution"/></Link></li>
                <li><Link to="/products"><HeaderItem itemName="Product"/></Link></li>
                <li className={classes.about}><HeaderItem itemName="About"/></li>
            </ul>
        </div>
    )
}

export default header