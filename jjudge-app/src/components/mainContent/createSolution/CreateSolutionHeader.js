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
                    Problem 1
                </Typography>
                <Typography>
                    Medium
                </Typography>
                <Typography>
                    ☆☆☆☆
                </Typography>
            </Grid>
            <Grid item className={classes.testCasesContainer}>
                {viewInfo  

                ?<Typography>
                    You have been asked to build a simple encryption program. This program should be able to send coded messages without someone been able to read them. The process is very simple. It is divided into two parts.
                    First, each uppercase or lowercase letter must be shifted three positions to the right, according to the ASCII table: letter 'a' should become letter 'd', letter 'y' must become the character '|' and so on. Second, each line must be reversed. After being reversed, all characters from the half on (truncated) must be moved one position to the left in ASCII. In this case, 'b' becomes 'a' and 'a' becomes '`'.
                    For example, if the resulting word of the first part is "tesla", the letters "sla" should be moved one position to the left. However, if the resulting word of the first part is "t#$A", the letters "$A" are to be displaced.
                </Typography>
                :<TestCasesExemple />
                
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