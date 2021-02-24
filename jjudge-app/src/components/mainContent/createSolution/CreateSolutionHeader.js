import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TestCasesExemple from './TestCasesExemple'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    testCasesContainer:{
        maxHeight: '400px',
        overflow: 'auto'
    }
}))

const CreateSolutionHeader = props => {
    const {problemInfo} = props
    const classes = useStyles()

    const [viewInfo, setViewInfo] = useState(true)

    const changeViewInfo = event => {
        setViewInfo(!viewInfo)

    }
    return (
        <Grid
            container
            spacing={2}
            direction='column'
        >
            <Grid item >
                <Typography variant="h5" component="h2">
                    {problemInfo.title}
                </Typography>
                <Typography>
                   Level: {problemInfo.level}
                </Typography>
                <Typography>
                   Rate: {problemInfo.rate}
                </Typography>
            </Grid>
            <Grid item className={classes.testCasesContainer}>
                {viewInfo  

                ?<Typography>
                    {problemInfo.enunciated}
                </Typography>
                :<TestCasesExemple testCases={props.testCases}/>
                
                }
            </Grid>

            <Grid item>
                <Button
                    variant='outlined'
                    onClick={changeViewInfo}
                >
                    {
                    viewInfo
                    ? 'Casos de Teste'
                    : 'Enunciado'
                    }
                </Button>
            </Grid>
        </Grid>
    )

}

export default CreateSolutionHeader