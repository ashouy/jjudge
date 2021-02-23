import { Collapse, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CreateSolutionHeader from './CreateSolutionHeader'
import CreateSolutionPlainText from './CreateSolutionPlainText'
import RunTestCases from './RunTestCases'

const useStyles = makeStyles((theme) => ({

}))
const CreateSolutionScreen = props => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const expandedHandler = () =>{
        setExpanded(prev => !prev)
    }
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
                    <CreateSolutionPlainText runClick={expandedHandler}/>
                </Grid>
                <Grid item>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <RunTestCases/>
                    </Collapse>
                </Grid>

        </Grid>
    )
}

export default CreateSolutionScreen