import { Card, Typography, makeStyles, CardContent } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        minWidth: 350,
        minHeight: 500,
    },
    title: {
        fontSize: 20
    },
    pos: {
        marginBottom: 12
    }

})


const Problem = props => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color='textSecondary' gutterBottom>
                    {props.enunciated}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>


            </CardContent>
        </Card>
    )
}

export default Problem