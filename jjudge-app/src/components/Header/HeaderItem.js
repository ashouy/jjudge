import React from 'react'
import classes from './Header.module.css'
const headerItem = props =>{
    return(
        <div className={classes.li}>
            {props.itemName}
        </div>
    )
}

export default headerItem