import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme =>({
    root:{
        flexGrow: 1
    },
    grid:{
        direction:"column",
        justify: "flex-start",
        alignItems:"center"
    }
}))

const CreateProblem = props =>{
    
    const classes = useStyles()

    return(
        <div>
            <Typography >Create Problem</Typography>
            <hr></hr>
            <Grid className={classes.grid}>
                <TextField label="Title" />
            </Grid>
            <Grid className={classes.grid}>
                <TextField
                    label="enunciated"
                    multiline
                    variant="outlined"
                />
            </Grid>
        </div>
    )
}

export default CreateProblem