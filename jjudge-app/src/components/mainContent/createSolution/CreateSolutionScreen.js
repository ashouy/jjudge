import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CreateSolutionHeader from './CreateSolutionHeader'
import CreateSolutionPlainText from './CreateSolutionPlainText'

const useStyles = makeStyles((theme) => ({

}))
const CreateSolutionScreen = props => {
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={2}
            direction='column'
            justify='flex-start'
            alignItems='stretch'
            >
                <Grid item>
                    <CreateSolutionHeader/>
                </Grid>
                <Grid item>
                    <CreateSolutionPlainText />
                </Grid>

        </Grid>
    )
}

export default CreateSolutionScreen