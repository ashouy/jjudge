import { Button, Grid, makeStyles, TextareaAutosize, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const CreateSolutionPlainText = props => {
    const classes = useStyles

    return (
        <Grid container direction='column'>
            <Grid item>
                <TextareaAutosize
                    rowsMin={5}
                    
                >

                </TextareaAutosize>
            </Grid>
            <Grid item>
                <Grid container direction='row' spacing={1}>
                    <Grid item>
                        <Button variant='outlined'>Submeter</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' onClick={props.runClick} >Rodar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateSolutionPlainText